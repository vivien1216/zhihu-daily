<template>
  <div class="index">
    <header>
      <div class="header-left">
        <i class="iconfont icon-toggle">&#xe61d;</i>
        <span class="page-home">首页</span>
      </div>
      <div class="header-right">
        <i class="iconfont icon-news">&#xe667;</i>
        <i class="iconfont icon-tab">&#xe6b9;</i>
      </div>
    </header>
    <swiper></swiper>
  </div>
</template>

<script>
import Swiper from "../components/swiper"

export default {
  name: 'Index',
  components: {
    Swiper
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/Index.sass"
</style>

