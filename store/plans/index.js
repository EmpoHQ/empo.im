export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  SEARCH() {
    const { query } = this.$router.currentRoute
    const options = {
      method: 'GET',
      url: `/v1/plans`,
      params: query
    }
    return this.$axios(options)
  }
}
