<template>
  <div class="myInfo">
    <header>
      <i class="iconfont" @click="goBack">&#xe601;</i>
      <span>个人主页</span>
      <div class="right">
        <i class="iconfont">&#xe610;</i>
      </div>
    </header>
    <div class="content">
      <div class="image">
         <img class="avatar" src="../assets/images/avatar.jpg" />
      </div>
      <div class="info">
         <p class="name">vivien</p>
         <ul class="list">
           <li class="active">绑定腾讯微博</li>
           <li>解绑新浪微博</li>
         </ul>
      </div>
      <div class="signOut">
      <button>登出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'myInfo',
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/myInfo.sass';
</style>

