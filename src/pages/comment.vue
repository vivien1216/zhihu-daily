<template>
  <div class="comment">
    <header>
       <i class="iconfont" @click="backToDetail">&#xe601;</i>
      <span>{{this.$store.state.comments}}条评论</span>
      <div class="right" @click="goWriteComment">
        <i class="iconfont">&#xe610;</i>
      </div>
    </header>
    <div class="content">
      <long-comment></long-comment>
      <short-comment></short-comment>
    </div>
  </div>
</template>

<script>
import router from '../router'
import longComment from '../components/longComment'
import shortComment from '../components/shortComment'


export default {
  name: 'comment',
  data () {
    return {
      showContent: false
    }
  },
  components: {
    longComment,
    shortComment
  },
  methods: {
    //返回文章详情
    backToDetail () {
      router.go(-1);
    },
    goWriteComment () {
      router.push('/writeComment');
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/comment.sass'
</style>