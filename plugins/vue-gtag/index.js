import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (ctx, inject) => {
  const router = ctx.app.router

  Vue.use(
    VueGtag,
    {
      enabled: process.env.NODE_ENV === 'production',
      pageTrackerTemplate(to) {
        return {
          page_title: to.name,
          page_path: to.fullPath
        }
      },
      config: {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    router
  )

  ctx.$gtag = Vue.$gtag
  inject('gtag', Vue.$gtag)
}
