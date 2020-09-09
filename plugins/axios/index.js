const IS_PROD = process.env.NODE_ENV === 'production'

export default function({ app }) {
  /** Trying to request */
  app.$axios.onRequest(config => {
    const { method, url, query, data } = config
    config.withCredentials = true

    if (IS_PROD) {
      config.baseURL = process.env.API_PUBLIC_URL
    } else {
      if (process.server) {
        config.baseURL = 'http://localhost:3000'
        // config.baseURL = 'http://api:3000'
      } else if (process.client) {
        config.baseURL = 'http://localhost:3000'
      }
    }

    app.$log(
      `[Axios Request] Making request to ${method.toUpperCase()} "${url}"`,
      {
        query,
        data
      }
    )
    return config
  })

  /** Succeed */
  app.$axios.onResponse(res => {
    app.$log(`[Axios Response]`, res.data.data)

    return res.data.data
  })

  /** Error */
  app.$axios.onError(err => {
    app.$log(`[Axios Error] ${err.response.status}`, err.response.data)

    return Promise.reject(err)
  })
}
