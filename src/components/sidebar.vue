<template>
  <transition name="move">
    <div class="wrap">
      <div class="sidebar">
	      <div class="top">
	        <div class="info" @click="goMyInfo">
	          <img class="avatar" src="../assets/images/avatar.jpg" />
	          <span class="name">vivien</span>
	        </div>
	        <div class="menu-wrapper">
	          <div class="collect" @click="showCollect">
	            <i class="iconfont">&#xe605;</i>
	            <span>收藏</span>
	          </div>
	          <div class="download">
	            <i class="iconfont">&#xe694;</i>
	            <span>离线下载</span>
	          </div>
	        </div>
	      </div>
	      <div class="home" @click="hideSidebar">
	        <i class="iconfont">&#xe604;</i>
	        <span>首页</span>
	      </div>
	    </div>
	    <div class="mask" @click="hideSidebar"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    hideSidebar () {
      this.$emit('hideSidebar');
      this.$router.push('/')
    },
    showCollect () {
      this.$router.push('/collect');
    },
    goMyInfo () {
      this.$router.push('/myInfo')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/components/sidebar.sass'
</style>