export const state = () => ({
  locales: ['en', 'ko'],
  locale: 'en'
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
