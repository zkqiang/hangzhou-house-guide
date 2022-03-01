const moment = require('moment-timezone');

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  base: '/',
  head: [
    [ 'script', {src: 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js'} ],
    [ 'script', {src: 'https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js'} ],
    [ 'link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css'
    } ],
    [ 'link', {rel: 'icon', href: '/favicon.png'} ],
  ],
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '政策', link: '/policy/'},
      {text: '购房', link: '/purchase/'},
      {text: '规划', link: '/plan/'},
      {text: '板块', link: '/area/'},
      {text: '问答', link: '/faq/'},
      {text: 'GitHub', link: 'https://github.com/zkqiang/hangzhou-house-guide'},
    ],
    lastUpdated: '最后更新于',
    sidebar: 'auto',
    sidebarDepth: 2,
    docsRepo: 'zkqiang/hangzhou-house-guide',
    docsDir: '/',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    ads: {
      client: 'ca-pub-2938778520580915',
      slot: '6059227456',
      inSlot: '4239751461'
    }
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-disable-url-encode'));
    }
  },
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        if (lang === 'zh-CN') {
          return moment(timestamp).tz('Asia/Shanghai').locale(lang).format('lll')
        } else {
          return moment(timestamp).utc().locale(lang).format('lll')
        }
      },
      dateOptions: {
        hour12: false
      }
    },
    '@vuepress/medium-zoom': {
      selector: 'img',
    },
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/back-to-top': {},
    '@vuepress/nprogress': {},
    'vuepress-plugin-clean-urls': {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    },
    'sitemap': {
      hostname: 'https://hzhouse.zkqiang.cn/',
      dateFormatter: time => new moment(time, 'lll').toISOString(),
    },
    'seo': {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => '/favicon.png',
      url: (_, $site, path) => 'https://hzhouse.zkqiang.cn/' + path,
      image: ($page, $site) => $page.frontmatter.image && ($site.themeConfig.domain || '') + $page.frontmatter.image,
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    },
  },
};
