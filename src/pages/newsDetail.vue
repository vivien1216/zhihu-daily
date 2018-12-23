<template>
  <div class="newsDetail">
    <header>
      <div class="leftarrow" @click="goHome">
        <i class="iconfont">&#xe601;</i>
      </div>
      <ul class="menu-wrapper">
        <li>
          <i class="iconfont share">&#xe602;</i>
        </li>
        <li>
          <i class="iconfont collect">&#xe605;</i>
        </li>
        <li class="message">
          <i class="iconfont">&#xe6bf;</i>
          <span>3</span>
        </li>
        <li class="good">
          <i class="iconfont">&#xe600;</i>
          <span>6</span>
        </li>
      </ul>
    </header>
    <div class="image">
      <img v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title" />
      <span class="image-title">{{data.title}}</span>
      <span class="image-source">图片：{{this.data.image_source}}</span>
    </div>
    <div class="body-wrap" v-html="this.data.body"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'newsDetail',
  data () {
    return {
      data: {}
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
        })
        .catch(error => {
          console.log(error)
        })
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
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/newsDetail.sass';
@import "../../static/css/news_qa.auto.css";
</style>