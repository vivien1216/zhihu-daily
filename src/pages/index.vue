<template>
  <div class="index">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
	    <header>
	      <div class="header-left">
	        <i class="iconfont icon-toggle" @click="toggleSidebar">&#xe61d;</i>
	        <span class="page-home">首页</span>
	      </div>
	      <div class="header-right">
          <router-link to="/news">
	          <i class="iconfont icon-news">&#xe667;</i>
          </router-link>
	        <i class="iconfont icon-tab">&#xe6b9;</i>
	      </div>
	    </header>
	    <swiper></swiper>
	    <news-list></news-list>
	</mt-loadmore>
    <sidebar v-show="showSideBar" v-on:hideSidebar="toggleSidebar"></sidebar>
  </div>
</template>

<script>
import Swiper from "../components/swiper"
import newsList from '../components/newsList'
import sidebar from '../components/sidebar'
import 'scrolling-element'; //  polyfill 'document.scrollingElement'

export default {
  name: 'Index',
  components: {
    Swiper,
    newsList,
    sidebar
  },
  data () {
    return {
      showSideBar: false
    }
  },
  created() {
    this.showSideBar = false;
  },
  methods: {
    //切换侧边栏显示状态
    toggleSidebar () {
      //侧边栏显示时底部列表不能滚动
      let scrollTop;
      if(!this.showSidebar) {  //禁止滑动
        scrollTop = document.scrollingElement.scrollTop;
        document.body.style.position = 'fixed';
        document.body.style.top = -scrollTop + 'px';
      }else {  //取消禁止滑动
        document.body.style.position = '';
        document.scrollingElement.scrollTop = scrollTop;
      }
      this.showSideBar = !this.showSideBar;
    },
    //下拉刷新数据
    loadTop() {
	  this.$refs.loadmore.onTopLoaded();
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/Index.sass"
</style>

