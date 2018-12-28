<template>
  <div class="news-list">
    <ul class="list" ref="newsList"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check=false
      infinite-scroll-distance="40">
      <div class="title">今日新闻</div>
      <li class="list-item" v-for="story in this.$store.state.stories" :key="story.id" @click="goDetail(story.id)">
        <span class="item-title">{{story.title}}</span>
        <div class="image-wrapper">
          <img class="item-img" v-lazy.newsList="attachImageUrl(story.images[0])" />
          <div class="multipic" v-if="story.multipic">
            <i class="iconfont">&#xe611;</i>
            <span>多图</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import { Indicator } from 'mint-ui'

export default {
  name: 'newsList',
  data () {
    return {
      loading: false,
      date: Date,
      dateStr: '' // 加载数据日期字符串格式
    }
  },
  created () {
     // 判断是否是第一次进入首页
      if (this.$store.state.isFirstLoad) {
        this.fetchData();
        this.$store.dispatch('changeLoadState');
      }
      this.initDate();

      // 下拉刷新数据
      this.$on('refresh', () => {
        this.refreshData();
      });
  },
  methods: {
    //获取最新新闻内容
    fetchData () {
      axios.get('api/news/latest')
        .then( res => {
          res = res.data;
          let stories = res.stories;
          let ids = stories.map(story => story.id);

          this.$store.dispatch('addNews', {
            stories: stories,
            ids: ids
          });
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 刷新数据
    refreshData() {
      // 刷新数据
      this.$store.dispatch('refreshNews');

      this.$nextTick(() => {
        this.fetchData();
      });
    },
    //修改图片链接
	  attachImageUrl: function(srcUrl) {
  	  if (srcUrl !== undefined) {
  	    return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
  	  }
	  },
    // 初始化当前日期
    initDate: function() {
      this.date = new Date();
      this.changeDateToString();
    },
    // 将Date类型的日期转换成String类型
    changeDateToString: function() {
      let year = this.date.getFullYear() + '';
      let month = this.date.getMonth() + 1;
      let day = this.date.getDate();
      month = month < 10 ? '0' + month : month; // 格式化月份，小于10前置0
      day = day < 10 ? '0' + day : day; // 格式化日期，小于10前置0;

      this.dateStr = year + month + day;
    },
    // 将日期前推一天
    decreaseDate: function() {
      this.date.setDate(this.date.getDate() - 1);
      this.changeDateToString();
    },
    // 根据日期获取更多新闻数据
    fetchMoreData: function() {
      axios.get('api/news/before/' + this.dateStr)
      .then(response => {
        // 合并数据
        let stories = response.data.stories;
        let ids = stories.map(story => story.id);

        this.$store.dispatch('addNews', {
          stories: stories,
          ids: ids
        });

        // 合并完数据关闭加载提示框
        Indicator.close();
      })
      .catch(error => {
        console.log(error);
      });

      this.decreaseDate();
    },
    // 加载更多新闻数据
    loadMore: function() {
      this.loading = true;

      // 打开加载提示框
      Indicator.open({
        spinnerType: 'fading-circle'
      });

      // 加载更多数据并更新DOM
      this.$nextTick(function () {
        this.fetchMoreData();
      });

      this.loading = false;
    },
    //跳转详情页
    goDetail (id) {
      this.$store.dispatch('changeCurrentNewsId', id);
      router.push({name: 'newsDetail', params: {id: id}})
    } 
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/components/newsList.sass'
</style>