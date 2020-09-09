require('dotenv').config()

const isProd = process.env.NODE_ENV === 'production'

// if (isProd) {
//   require('sqreen')
// }

const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const config = require('./nuxt.config')
config.dev = !isProd

async function start() {
  try {
    const nuxt = new Nuxt(config)
    const { host, port } = nuxt.options.server

    await nuxt.ready()

    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    app.use(nuxt.render)

    app.listen(port, host, () => {
      console.log(`[Nuxt info] Server listening on http://${host}:${port}`)
    })
  } catch (err) {
    console.error(`[Nuxt error]`, err)
  }
}

start()
