import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import newsDetail from '../pages/newsDetail.vue'
import News from '../pages/news.vue'
import setPage from '../pages/setPage.vue'
import comment from '../pages/comment.vue'
import Collect from '../pages/collect.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/setting',
      name: 'setPage',
      component: setPage
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: comment
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    }
  ]
})
