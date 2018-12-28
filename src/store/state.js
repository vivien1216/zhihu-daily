export default {
  stories: [], //新闻内容数组
  ids: [], //新闻id数组
  id: '' ,//当前新闻详情的id
  nextId: '',//下一篇新闻的id
  isFirstLoad: true, // 是否是第一次进入首页
  comments: 0, // 评论总数
  long_comments: 0, // 长评论总数
  short_comments: 0, // 短评论总数
  popularity: 0, // 点赞总数
  collectIds: [], //收藏新闻数组Id
  collectStories: [], //收藏新闻数组
  isCollected: false, //是否收藏
}