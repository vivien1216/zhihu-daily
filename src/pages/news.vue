<template>
  <div class="news-wrapper">
    <header>
      <i  class="iconfont" @click="toggleSidebar">&#xe61d;</i>
      <span>消息</span>
    </header>
    <div class="content">
      <div class="no-news">
        <div class="icon">
          <i class="iconfont">&#xe667;</i>
        </div>
        <p>哟，还没有新消息哦</p>
      </div>
    </div>
    <sidebar v-show="showSideBar" v-on:hideSidebar="toggleSidebar"></sidebar>
  </div>
</template>

<script>
import sidebar from '../components/sidebar';
import 'scrolling-element';

export default {
  name: 'News',
  data () {
    return {
      showSideBar: false
    }
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
  },
  components: {
    sidebar
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/news.sass';
</style>