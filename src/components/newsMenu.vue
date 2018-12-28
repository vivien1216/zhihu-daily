<template>
  <div class="news-menu">
    <ul class="menu-wrap">
      <li @click="showShare">
        <i class="iconfont share">&#xe602;</i>
      </li>
      <li @click="toggleCollect">
        <i class="iconfont collect" :class="{'collect-active': this.$store.state.isCollected}">&#xe605;</i>
      </li>
      <li class="message" @click="showComment">
        <i class="iconfont">&#xe6bf;</i>
        <span>{{this.$store.state.comments}}</span>
      </li>
      <li class="good" @click="thumbUp">
        <i class="iconfont" :class="{'dianzan-active': isDianzan}">&#xe600;</i>
        <span>{{this.$store.state.popularity}}</span>
      </li> 
    </ul>
    <mt-popup
      v-model="popupVisible"
      :visible="popupVisible"
      popup-transition="popup-fade">
      <share></share>
    </mt-popup>
  </div>
</template>

<script>
import axios from 'axios';
import share from './share'

export default {
  name: 'newsMenu',
  data () {
    return {
      isDianzan: false,
      popupVisible: false
    }
  },
   created() {
    this.fetchStoryExtra();
    this.$store.dispatch('judgeCollectState');
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
    },
    //点赞事件
    thumbUp: function () {
      if(!this.isDianzan) {
        this.$store.state.popularity++;
      } else {
        this.$store.state.popularity--;
      }
      this.isDianzan = !this.isDianzan;
    },
    //分享界面
    showShare: function () {
      this.popupVisible = true;
    },
    //收藏事件
    toggleCollect: function () {
      this.$store.dispatch('toggleCollect')
    }
  },
  components: {
    share
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/components/newsMenu.sass'
</style>