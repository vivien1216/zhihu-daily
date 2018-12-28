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
          <div class="changMode">
            <i class="iconfont icon-tab" @click="changeMode">&#xe6b9;</i>
            <div class="settingMenu" v-show="showMode">
              <ul>
                <li v-show="dayColor" @click="changeBgColor">日间模式</li>
                <li v-show="!dayColor" @click="changeBgColor">夜间模式</li>
                <li @click="goSetting">设置选项</li>
              </ul>
            </div>
          </div>
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
      showSideBar: false,
      showMode: false,
      dayColor: true
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
    this.$refs.newsList.$emit('refresh');
	  this.$refs.loadmore.onTopLoaded();
    },
    //修改模式
    changeMode () {
      this.showMode = !this.showMode;
    },
    changeBgColor () {
      this.dayColor = !this.dayColor;
      this.showMode = false;
    },
    //前往设置页面
    goSetting () {
      this.$router.push('/setting');
      this.showMode = false;
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/Index.sass"
</style>

