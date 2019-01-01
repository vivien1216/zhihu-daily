<template>
  <div class="writeComment">
    <header>
      <i class="iconfont arrow-left" @click="goBack">&#xe601;</i>
      <span>写点评</span>
      <div class="right">
        <i class="iconfont" @click="commit">&#xe6df;</i>
      </div>
    </header>
    <div class="warning-text">
      <textarea class="text" placeholder="不友善言论会被删除，深度讨论会被优先展示。"></textarea>
    </div>
    <footer>
      <span>同时分享到：</span>
      <i class="iconfont">&#xe606;</i>
      <i class="iconfont">&#xe8e6;</i>
    </footer>
  </div>
</template>

<script>
export default {
	name: 'writeComment',
	methods: {
	  goBack () {
	    this.$router.go(-1);
	  },
	  commit () {
	    alert('暂时无法实现提交功能');
	  }
	}
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/writeComment.sass';
</style>