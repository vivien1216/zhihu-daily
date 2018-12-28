<template>
  <div class="collect">
    <header>
      <i class="iconfont" @click="goBack">&#xe61d;</i>
      <span>{{this.$store.state.collectStories.length}}条收藏</span>
    </header>
    <ul class="list" ref="collectList">
      <li class="list-item" v-for="story in this.$store.state.collectStories" :key="story.id" @click="goDetail(story.id)">
        <span class="item-title">{{story.title}}</span>
        <div class="image-wrapper">
          <img class="item-img" v-lazy.collectList="attachImageUrl(story.images[0])" />
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
export default {
  name: 'Collect',
  methods: {
  //返回首页
  goBack: function () {
    this.$router.push('/');
  },
   //修改图片链接
  attachImageUrl: function(srcUrl) {
    if (srcUrl !== undefined) {
      return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
    }
  },
  //跳转新闻详情页面
  goDetail (id) {
    this.$store.dispatch('changeCurrentNewsId', id);
    this.$router.push({name: 'newsDetail', params: {id: id}})
  }
 }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/collect.sass';
</style>