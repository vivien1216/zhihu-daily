import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import newsDetail from '../pages/newsDetail.vue'

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
    }
  ]
})
