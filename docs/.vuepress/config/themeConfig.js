const nav = require('./themeConfig/nav.js');
const blogConfig = require('./themeConfig/blogConfig.js');
const famousQuotes = require('./themeConfig/famousQuotes.js');
const heroBackgroundImages = require('./themeConfig/heroBackgroundImages.js');
const friendLink = require('./themeConfig/friendLink.js');
const searchThirdparty = require('./themeConfig/searchThirdparty.js');

// 主题配置
module.exports = {
  author: "凯小默",
  authorAvatar: "/img/avatar.jpg",
  slogan: 'standing on the shoulders of giants',
  homeBlogCfg: {
    category: '文章分类',
    categoryNum: 10,
    tag: '热门标签',
    tagNum: 30,
    friendLink: '友情链接',
    friendLinkNum: 5
  },
  lastupdateNum: 3, // 最近更新文章数量
  logo: "/img/kmc.jpg",
  type: "blog", // 已修改源码，默认就是博客
  search: true,
  searchMaxSuggestions: 100,
  lastUpdated: "最近更新时间",
  startYear: "2019",
  version: '1.1.x',
  sidebar: "structuring", // vdoing约定的
  valineConfig: {
    appId: '4jFlK9iHSQXnXvTwk9PiOiRo-gzGzoHsz',// your appId
    appKey: 'ANKlH2c19qzUNp5kTjhpKk4i', // your appKey
    showComment: false, // 默认关闭
    placeholder: '填写邮箱可以收到回复提醒哦ヾﾉ≧∀≦)o！！！'
  },
  famousQuotes, // 名言警句
  heroBackgroundImages, // 背景图
  nav, // 导航
  blogConfig, // 设置 socialLinks
  friendLink, // 友链
  searchThirdparty // 第三方搜索链接的搜索框
}
