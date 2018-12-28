import * as types from './mutation-types.js'

export default {
  // 新增新闻内容
  [types.ADD_NEWS] (state, payload) {
    state.stories = state.stories.concat(payload.stories);
    state.ids = state.ids.concat(payload.ids);
  },
  // 刷新首页新闻内容
  [types.REFRESH_NEWS] (state) {
    state.stories = [];
  },
  // 修改是否是第一次进入首页
  [types.CHANGE_LOAD_STATE] (state) {
    state.isFirstLoad = !state.isFirstLoad;
  },
 //修改当前新闻详情页面的id
 [types.CHANGE_CURRENT_NEWS_ID] (state, id) {
 	state.id = id;
 	let index = state.ids.indexOf(id);
 	state.nextId= state.ids[++index];
 },
 // 刷新首页新闻内容
  [types.REFRESH_NEWS] (state) {
    state.stories = [];
  },
}