<template>
  <span @click="OnTranslate" class="translate">
    <vue-image
      :src="require('~/assets/svgs/ic_language.svg')"
      class="translate__img"
    />
    <span class="translate__text">{{ GetLocale }}</span>
  </span>
</template>

<script>
export default {
  computed: {
    GetLocale() {
      return this.$store.state.locales.locale.toUpperCase()
    }
  },
  methods: {
    OnTranslate() {
      switch (this.$store.state.locales.locale) {
        case 'ko':
          this.$store.commit('locales/SET_LOCALE', 'en')
          break

        case 'en':
        default:
          this.$store.commit('locales/SET_LOCALE', 'ko')
          break
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.translate {
  @apply cursor-pointer;
  @apply inline-flex items-center;
}
@screen md {
  .translate {
    border-radius: 9.6px;
    padding: 6px 12px;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);
  }
}

.translate__img {
  width: 18px;
  height: 18px;
  margin-right: 3px;
}
@screen md {
  .translate__img {
    width: 22px;
    height: 22px;
    margin-right: 9px;
  }
}
.translate__text {
  font-size: 14px;
  color: #050505;
}
@screen md {
  .translate__text {
    font-size: 20px;
  }
}
</style>