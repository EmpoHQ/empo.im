export const state = () => ({})

export const getters = () => {}

export const mutations = {}

export const actions = {
  async nuxtServerInit(_, { app }) {
    try {
    } catch (err) {
      app.$log('[NuxtServerInitError]', err)
    }
  }
}
