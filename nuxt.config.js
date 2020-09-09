module.exports = {
  telemetry: false,
  mode: 'universal',
  target: 'server',
  env: process.env,
  server: {
    port: process.env.PORT
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index, follow' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://empoapp.s3.ap-northeast-2.amazonaws.com/public/favicon_b.png'
      }
    ]
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap'],
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/logger' },
    { src: '~/plugins/cheerio' },
    { src: '~/plugins/vue-gtag' },
    { src: '~/plugins/vue-moment' }
  ],
  components: [
    { path: '~/components/atoms', prefix: 'vue' },
    { path: '~/components/molecules', prefix: 'vue' },
    { path: '~/components/organisms', prefix: 'vue' },
    { path: '~/components/templates', prefix: 'vue' }
  ],
  sitemap: {
    hostname: process.env.PUBLIC_URL,
    // defaults: {
    //   changefreq: 'daily',
    //   lastmod: new Date(),
    //   lastmodrealtime: true
    // },
    gzip: true
    // exclude: ['/search']
  }
}
