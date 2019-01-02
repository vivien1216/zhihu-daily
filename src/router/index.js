import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import newsDetail from '../pages/newsDetail'
import News from '../pages/news'
import setPage from '../pages/setPage'
import comment from '../pages/comment'
import Collect from '../pages/collect'
import writeComment from '../pages/writeComment'
import sectionDetail from '../pages/sectionDetail'
import myInfo from '../pages/myInfo'

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
    },
    {
      path: '/writeComment',
      name: 'writeComment',
      component: writeComment
    },
    {
      path: '/sectionDetail/:id',
      name: 'sectionDetail',
      component: sectionDetail
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    }
  ]
})
