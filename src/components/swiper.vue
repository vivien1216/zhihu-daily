<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id">
        <img class="top-story-img" :src="attachImageUrl(topStory.image)" :alt="topStory.title" />
        <span class="top-story-title">{{topStory.title}}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Swiper',
  data () {
    return {
      topStories: {}
    }
  },
  methods: {
    getTopStories () {
      axios.get('api/news/latest')
        .then( res => {
          res = res.data;
          this.topStories = res. top_stories;
        })
        .catch( error => {
          console.log(error)
        })
    },
     // 修改图片链接
      attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
      }
  },
  created () {
    this.getTopStories();
  }
}
</script>

<style lang="sass">
@import '../assets/sass/components/swiper.sass'
</style>

