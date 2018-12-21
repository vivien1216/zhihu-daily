<template>
  <div class="news-list">
    <ul class="list" ref="newsList">
      <div class="title">今日新闻</div>
      <li class="list-item" v-for="story in stories" :key="story.id">
        <span class="item-title">{{story.title}}</span>
        <div class="image-wrapper">
          <img class="item-img" :src="attachImageUrl(story.images[0])" />
          <div class="multipic" v-if="story.multipic">
            <i class="iconfont">&#xe611;</i>
            <span>多图</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { Indicator } from 'mint-ui'

export default {
  name: 'newsList',
  data () {
    return {
      stories: []
    }
  },
  created () {
    this.getNewsListData();
  },
  methods: {
    getNewsListData () {
      axios.get('api/news/latest')
        .then( res => {
          res = res.data;
          this.stories = res.stories
          console.log(this.stories)
        })
        .catch(error => {
          console.log(error)
        })
    },
    //修改图片链接
	attachImageUrl: function(srcUrl) {
	if (srcUrl !== undefined) {
	  return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
	}
	},
  },
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/components/newsList.sass'
</style>