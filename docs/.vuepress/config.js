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
        path: '/js/JavaScript红宝书笔记',
        collapsable: false, // 不折叠
        children: [
          { title: "JavaScript红宝书笔记", path: "/js/JavaScript红宝书笔记" },
          { title: "原型和原型链", path: "/js/原型和原型链" },
          { title: "PromiseA+规范", path: "/js/PromiseA+" },
          { title: "实现一个Promise", path: "/js/实现一个Promise" },
          { title: "generator & async await", path: "/js/generator & async await" },
          { title: "变量_作用域_内存", path: "/js/变量_作用域_内存" },
          { title: "js模块化", path: "/js/js模块化" },
          { title: "数组相关", path: "/js/数组相关" },
          { title: "BOM相关", path: "/js/BOM" },
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
      },
      {
        title: "vue2",
        path: '/vue2/vue知识点',
        collapsable: true, // 折叠
        children: [
          { title: "vue知识点", path: "/vue2/vue知识点" },
          { title: "原理", path: "/vue2/原理" },
          { title: "查漏补缺", path: "/vue2/查漏补缺" },
        ],
      },
      {
        title: "浏览器相关",
        path: '/browser/浏览器相关',
        collapsable: true, // 折叠
        children: [
          { title: "浏览器相关", path: "/browser/浏览器相关" },
          { title: "主流浏览器及其内核", path: "/browser/主流浏览器及其内核" }
        ],
      },
      {
        title: "进阶",
        path: '/进阶/常见算法',
        collapsable: true, // 折叠
        children: [
          { title: "常见算法", path: "/进阶/常见算法" },
          { title: "前端工程化", path: "/进阶/前端工程化" },
          { title: "MVC、MVP、MVVM模式", path: "/进阶/MVC、MVP、MVVM模式" }
        ],
      }
    ]
  }
}