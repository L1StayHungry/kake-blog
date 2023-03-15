module.exports = {
  title: '卡克',
  description: '卡克的个人博客',
  base: '/kake-blog/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto', // 侧边栏，放在页面的右侧
    // 导航栏
    nav: [
        { text: '首页', link: '/' },
        { 
            text: '卡克的 前端博客', 
            items: [
                { text: 'Github', link: 'https://github.com/L1StayHungry' }
            ]
        }
    ],
    // 侧边栏
    sidebar: [
      {
          title: '好好学习，天天向上',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
      {
        title: "JS整理",
        path: '/js/BOM',
        collapsable: false, // 不折叠
        children: [
          { title: "BOM相关", path: "/js/BOM" },
          { title: "PromiseA+规范", path: "/js/PromiseA+" },
        ],
      },
      {
        title: "CSS整理",
        path: '/css/CSS',
        collapsable: true, // 折叠
        children: [
          { title: "CSS", path: "/css/CSS" }
        ],
      },
      {
        title: "HTML整理",
        path: '/html/H5',
        collapsable: true, // 折叠
        children: [
          { title: "H5新特性", path: "/html/H5" }
        ],
      }
    ]
  }
}