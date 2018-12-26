<template>
  <div class="news-menu">
    <ul class="menu-wrap">
      <li>
        <i class="iconfont share">&#xe602;</i>
      </li>
      <li>
        <i class="iconfont collect">&#xe605;</i>
      </li>
      <li class="message" @click="showComment">
        <i class="iconfont">&#xe6bf;</i>
        <span>{{this.$store.state.comments}}</span>
      </li>
      <li class="good">
        <i class="iconfont">&#xe600;</i>
        <span>{{this.$store.state.popularity}}</span>
      </li> 
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'newsMenu',
   created() {
    this.fetchStoryExtra();
  },
  methods: {
    fetchStoryExtra () {
       axios.get('api/story-extra/' + this.$store.state.id)
       .then(res => {
         this.$store.state.long_comments = res.data.long_comments;
         this.$store.state.short_comments = res.data.short_comments;
         this.$store.state.comments = res.data.comments;
         this.$store.state.popularity = res.data.popularity
       })
       .catch(error => {
         console.log(error);
       })
    },
     // 查看评论界面
    showComment: function() {
      this.$router.push({ name: 'comment', params: { id: this.$store.state.id } });
    } 
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/components/newsMenu.sass'
</style>