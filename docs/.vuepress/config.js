const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  title: "卡夫卡的岛上书店",
  base: '/blogs/', // 格式：'/<部署仓库名>/'， 默认'/'
  description: "卡夫卡的岛上书店是凯小默的个人博客，用于记录读书学习笔记、分享书籍、音乐、旅行等个人兴趣的站点。",
  dest: "public",
  theme: require.resolve('../../theme-reco-vdoing'), // 使用本地主题
  markdown: {
    lineNumbers: true // 代码行号
  },
  head,
  plugins,
  themeConfig
}