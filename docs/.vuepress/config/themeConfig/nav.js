// nav
module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { 
    text: '百年孤独', 
    link: '/loneliness/', 
    icon: '',
    items: [
      { text: '鲁迅', link: '/loneliness/2c16dfdd186c9/', icon: 'reco-blog' },
    ]
  },
  {
    text: '图书馆',
    link: '/library/',
    icon: '',
    items: [
      { text: '时间地图', link: '/library/map/', icon: 'reco-blog' },
      { text: '中文维基百科', link: '/library/wiki/', icon: 'reco-blog' },
      { text: '世界数字图书馆', link: '/library/wdl/', icon: 'reco-blog' },
      { text: '豆瓣榜单', link: '/library/douban/', icon: 'reco-blog' },
      { text: '网易公开课', link: '/library/open163/', icon: 'reco-blog' },
      { text: '中华诗词', link: '/library/shici/', icon: 'reco-blog' },
      { text: 'ProcessOn图形化知识资源', link: '/library/processon/', icon: 'reco-blog' },      
    ]
  },
  { 
    text: '昨日与明日', 
    link: '/idealism/', 
    icon: '',
    items: [
      { text: '忧伤的年轻人', link: '/idealism/kaimo/', icon: 'reco-blog' },
      { text: '诺贝尔文学奖', link: '/nobelprize/literature/', icon: 'reco-blog' },
    ]
  },
  {
    text: '索引',
    icon: 'reco-api',
    items: [
      { text: '总目录', link: '/sitemap/', icon: 'reco-blog' },
      { text: '分类', link: '/categories/', icon: 'reco-category' },
      { text: '标签', link: '/tags/', icon: 'reco-tag' },
      { text: '归档', link: '/archives/', icon: 'reco-date' },
    ]
  },
  {
    text: '关于',
    icon: 'reco-message',
    items: [
      {
        text: '联系',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/kaimo313', icon: 'reco-csdn' },
          { text: 'Gitee', link: 'https://gitee.com/kaimo313', icon: 'reco-mayun' },
          { text: 'GitHub', link: 'https://github.com/kaimo313', icon: 'reco-github' },
          { text: '联系店长', link: '/bookshop/linkme/', icon: 'reco-account' },
        ]
      },{
        text: '博客',
        items: [
          { text: '博客说明', link: '/bookshop/explain/', icon: 'reco-document' },
          { text: '更新日志', link: '/bookshop/logs/', icon: 'reco-document' },
        ]
      },{
        text: '其他',
        items: [
          { text: '资源工具', link: '/resource-tools/', icon: 'reco-document' },
          { text: '友情链接', link: '/bookshop/friendslink/', icon: 'reco-friend' },
          { text: '留言板', link: '/bookshop/message-board/', icon: 'reco-suggestion' },
        ]
      },
    ]
  }
]
