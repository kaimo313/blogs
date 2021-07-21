// nav
module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { 
    text: '前端', 
    link: '/web/',
    icon: '',
    items: [
      {
        text: '文档教程',
        items: [
          { text: '慕课教程', link: '/web/docs/imooc/wiki/', icon: 'reco-blog' },
          { text: 'ES6 入门教程', link: '/web/docs/es6/', icon: 'reco-blog' },
          { text: '网道-JavaScript 教程', link: '/web/docs/wangdoc/javascript/', icon: 'reco-blog' },
          { text: 'Angular 文档', link: '/web/docs/angular/', icon: 'reco-blog' },
          { text: 'React 文档', link: '/web/docs/react/', icon: 'reco-blog' },
          { text: 'Vue 文档', link: '/web/docs/vue/', icon: 'reco-blog' },
          { text: 'Node 文档', link: '/web/docs/node/', icon: 'reco-blog' },
          { text: 'Babel 文档', link: '/web/docs/babel/', icon: 'reco-blog' },
          { text: 'Webpack 文档', link: '/web/docs/webpack/', icon: 'reco-blog' },
          { text: 'TypeScript 文档', link: '/web/docs/typescript/', icon: 'reco-blog' },
          { text: '菜鸟教程', link: '/web/docs/runoob/', icon: 'reco-blog' },
          { text: '印记中文', link: '/web/docs/docschina/', icon: 'reco-blog' },
        ]
      },{
        text: '推荐博客',
        items: [
          { text: '阮一峰的个人网站', link: '/web/ruanyifeng/', icon: 'reco-blog' },
          { text: '廖雪峰的官方网站', link: '/web/liaoxuefeng/', icon: 'reco-blog' },
        ]
      },{
        text: '工具',
        items: [
          { text: 'AST Explorer', link: '/web/tools/astexplorer/', icon: 'reco-blog' },
        ]
      },
    ]
  },
  { 
    text: 'Golang', 
    link: '/golang/', 
    icon: '',
    items: [
      {
        text: '文档资源',
        items: [
          { text: 'Go语言圣经（中文版）', link: '/golang/docs/gopl-zh/', icon: 'reco-blog' },
          { text: 'Go 语言学习资料', link: '/golang/docs/31de972b403fd/', icon: 'reco-blog' },
        ]
      }
    ]
  },
  {
    text: '图书馆',
    link: '/library/',
    icon: '',
    items: [
      {
        text: '太易',
        items: [
          { text: '时间地图', link: '/library/map/', icon: 'reco-blog' },
        ]
      },{
        text: '太初',
        items: [
          { text: '中文维基百科', link: '/library/wiki/', icon: 'reco-blog' },
        ]
      },{
        text: '太始',
        items: [
          { text: '世界数字图书馆', link: '/library/wdl/', icon: 'reco-blog' },
        ]
      },{
        text: '太素',
        items: [
          { text: '豆瓣榜单', link: '/library/douban/', icon: 'reco-blog' },
          { text: '网易公开课', link: '/library/open163/', icon: 'reco-blog' },
        ]
      },{
        text: '太极',
        items: [
          { text: '中华诗词', link: '/library/shici/', icon: 'reco-blog' },
          { text: 'ProcessOn图形化知识资源', link: '/library/processon/', icon: 'reco-blog' },
        ]
      },
      
    ]
  },
  { 
    text: '昨日与明日', 
    link: '/idealism/', 
    icon: '',
    items: [
      {
        text: '昨日',
        items: [
          { text: '音乐', link: '/idealism/music/', icon: 'reco-blog' },
        ]
      },{
        text: '明日',
        items: [
          { text: '忧伤的年轻人', link: '/idealism/kaimo/', icon: 'reco-blog' },
        ]
      },
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
  { text: '留言板', link: '/bookshop/message-board/', icon: 'reco-suggestion' },
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
        ]
      },
    ]
  }
]
