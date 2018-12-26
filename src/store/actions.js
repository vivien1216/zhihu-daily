import * as types from './mutation-types.js'

export default {
  //新增新闻内容
  addNews: ({commmit}, payload) => {
  	commit(types.ADD_NEWS, payload)
  },
  //修改当前新闻详情的id
  changeCurrentNewsId: ({ commit }, id) => {
    commit(types.CHANGE_CURRENT_NEWS_ID, id);
  },
}