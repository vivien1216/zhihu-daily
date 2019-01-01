<template>
  <div class="newsDetail">
    <header>
      <div class="leftarrow" @click="goBack">
        <i class="iconfont">&#xe601;</i>
      </div>
      <news-menu></news-menu>
    </header>
    <div class="image">
      <img v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title" />
      <span class="image-title">{{data.title}}</span>
      <span class="image-source">图片：{{this.data.image_source}}</span>
    </div>
    <div class="body-wrap" v-html="this.data.body"></div>
    <div class="section" v-if="this.section" @click="goSectionNews(section.id)">
      <img v-lazy="attachImageUrl(this.section.thumbnail)" />
      <span>本文来自：{{this.section.name}} . 合集</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import newsMenu from '../components/newsMenu'

export default {
  name: 'newsDetail',
  data () {
    return {
      data: {},
      section: [],
    }
  },
  created () {
    this.getNewsDetailData();
  },
  methods: {
    getNewsDetailData () {
      //获取新闻id
      let id = this.$route.params.id
      axios.get('/api/news/' + id)
        .then(res => {
          res.data.body = this.attachBodyContent(res.data.body);
          this.data = res.data;
          this.section = res.data.section;
        })
        .catch(error => {
          console.log(error)
        });


       this.$store.dispatch('changeCurrentNewsId', id);
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    // 修改返回数据中的body中的图片链接
    attachBodyContent: function(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    },
    goBack () {
      this.$router.go(-1);
    },
    goToComment () {
      this.$router.push('/comment/:' + this.$store.state.id);
    },
    //前往指定id栏目新闻
    goSectionNews (id) {
       this.$router.push({name: 'sectionDetail', params: {id: id} });
       this.$store.dispatch('changeSectionNewsId', id);
    }
  },
  components: {
    newsMenu
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/newsDetail.sass';
</style>