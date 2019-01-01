<template>
  <div class="sectionDetail">
    <header>
      <i class="iconfont" @click="goBack">&#xe601;</i>
      <span>{{this.data.name}}</span>
    </header>
    <div class="content">
      <ul class="item-list" ref="itemList">
        <li class="item" v-for="story in this.data.stories" @click="goDetail(story.id)">
          <p class="item-title">{{story.title}}</p>
          <p class="item-date">{{story.display_date}}</p>
          <img class="item-img" v-lazy="attachImageUrl(story.images[0])" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'sectionDetail',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      let id = this.$route.params.id;
      axios.get('api/section/' + id)
      .then(res => {
        this.data = res.data;
        console.log(res.data);
      })
      .catch(error =>  {
        console.log(error);
      })
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    //返回上一级
    goBack () {
      this.$router.go(-1);
    },
    //前往详情页面
    goDetail (id) {
      this.$router.push({name: 'newsDetail', params: {id: id} });
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/sectionDetail.sass';
</style>