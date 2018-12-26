import * as types from './mutation-types.js'

export default {
  // 新增新闻内容
  [types.ADD_NEWS] (state, payload) {
  	state.stories = state.stories.concat(payload.stories);
  	state.ids = state.ids.concat(payload.ids);
  },
 //修改当前新闻详情页面的id
 [types.CHANGE_CURRENT_NEWS_ID] (state, id) {
 	state.id = id;
 	let index = state.ids.indexOf(id);
 	state.nextId= state.ids[++index];
 }
}