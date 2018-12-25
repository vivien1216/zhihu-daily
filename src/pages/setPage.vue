<template>
  <div class="setPage">
    <header>
      <router-link to="/">
        <i class="iconfont">&#xe601;</i>
        <span>设置</span>
      </router-link>
    </header>
    <div class="content">
      <div class="normal">
        <h2>常规</h2>
        <ul>
          <li>
            <div class="text">
              <p class="option">自动离线下载</p>
              <p class="detail">仅Wi-Fi下可用，自动下载最新内容</p>
            </div>
            <div class="check mr">
              <input type="checkbox" class="checkbox" />
            </div>
          </li>
          <li>
            <div class="text">
              <p class="option">无图模式</p>
              <p class="detail">2G/3G网络下不下载图片</p>
            </div>
            <div class="check mr">
               <input type="checkbox" class="checkbox" />
            </div>
          </li>
          <li>
            <div class="text">
              <p class="option">大字号</p>              
            </div>
            <div class="check">
              <input type="checkbox" class="checkbox" />
            </div>
          </li>
        </ul>
      </div>
      <div class="normal">
        <h2>其它</h2>
        <ul>
          <li>
            <div class="text">
              <p class="option">推送消息</p>              
            </div>
            <div class="check">
               <input type="checkbox" class="checkbox" />
            </div>
          </li>
          <li>
            <div class="text">
              <p class="option">点评分享到微博</p>              
            </div>
            <div class="check">
              <input type="checkbox" class="checkbox" />
            </div>
          </li>
          <li @click="showToast">
            <div class="text">
              <p class="option">清除缓存</p>              
            </div>
          </li>
          <li @click="checkVersion">
            <div class="text">
              <p class="option">检查更新</p> 
              <p class="detail">版本：2.6.7（798）</p>             
            </div>
          </li>
        </ul>
      </div>
      <div class="normal">
        <h2>反馈</h2>
        <ul>
          <li @click="feedBack">意见反馈</li>
          <mt-actionsheet
		    :actions="actions"
		    v-model="sheetVisible">
		  </mt-actionsheet>
        </ul>
      </div>
    </div>
    <footer>
      <p>登录即代表你同意<a>《知乎协议》</a> </p>
    </footer>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Actionsheet } from 'mint-ui';

export default {
  name: 'setPage',
  data () {
    return {
      actions: [{
        name:  "私信"
      },{
        name: "保存到网盘"
      },{
        name: "闪电互传"
      }],
      sheetVisible: false,
    }
  },
  methods: {
    showToast () {
      let instance = Toast('知乎日报： 清理成功');
	  setTimeout(() => {
	    instance.close();
	  }, 2000);
    },
    checkVersion () {
      let instance = Toast('知乎日报： 已是最新版本');
      setTimeout(() => {
	    instance.close();
	  }, 2000);
    },
    feedBack () {
      this.sheetVisible = true;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/pages/setPage.sass'
</style>