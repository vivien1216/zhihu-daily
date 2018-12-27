<template>
  <div class="longComment" v-show="!showContent">
    <div class="title">{{this.$store.state.long_comments}} 条长评</div>
    <div class="content">
      <ul class="comment-list" ref="longCommentList">
        <li class="comment-item" v-for="comment in comments">
          <img class="avatar" v-lazy.longCommentList="attachImageUrl(comment.avatar)" :alt="comment.author" />
          <div class="comment-content">
            <span class="author">{{comment.author}}</span>
            <i class="iconfont icon-dianzan">&#xe600;</i>
            <p class="text">{{comment.content}}</p>
            <p class="reply" v-if="comment.reply_to !== undefined">
              <span class="reply-author">//{{comment.reply_to.author}}</span>
              {{comment.reply_to.content}}
            </p>
            <span class="date">{{changeTime(comment.time)}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import { Lazyload } from 'mint-ui';
import Bus from '../assets/bus.js';


export default {
  name: 'longComment',
  data () {
    return {
      comments: [],
      showContent: false
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      axios.get('api/story/' + this.$store.state.id + '/long-comments') 
      .then( res => {
        this.comments = res.data.comments;
      })
      .catch( error => {
        console.log(error);
      })
    },
   // 修改图片链接
  attachImageUrl: function(srcUrl) {
    if (srcUrl !== undefined) {
      return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
    }
  },
  // 转换时间戳
  changeTime: function(time) {
    return moment(time).format('MM-DD HH:mm');
  }
 },
 mounted () {
   Bus.$on('change', (msg) => {
     this.showContent = msg;
     console.log(this.showContent)
   })
 }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/components/longComment.sass';
</style>