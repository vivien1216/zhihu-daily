import * as types from './mutation-types.js'

export default {
  //新增新闻内容
  addNews: ({ commit }, payload) => {
    commit(types.ADD_NEWS, payload);
  },
  // 修改是否是第一次进入首页
  changeLoadState: ({ commit }) => {
    commit(types.CHANGE_LOAD_STATE);
  },
  // 刷新首页新闻内容
  refreshNews: ({ commit }) => {
    commit(types.REFRESH_NEWS);
  },
  //修改当前新闻详情的id
  changeCurrentNewsId: ({ commit }, id) => {
    commit(types.CHANGE_CURRENT_NEWS_ID, id);
  },
  // 刷新首页新闻内容
  refreshNews: ({ commit }) => {
    commit(types.REFRESH_NEWS);
  },
}