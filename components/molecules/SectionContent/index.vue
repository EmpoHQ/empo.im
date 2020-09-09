<template>
  <div class="section-content">
    <p class="section-content__sub-title">{{ subTitle }}</p>
    <h3 class="section-content__title">{{ title }}</h3>
    <p class="section-content__desc" v-html="description" />
  </div>
</template>

<script>
export default {
  props: ['subTitle', 'title', 'description']
}
</script>

<style lang="postcss" scoped>
.section-content__sub-title {
  @apply text-black;
  @apply font-semibold;

  font-size: 30px;
}
.section-content__title {
  @apply text-primary-500;
  @apply uppercase;
  @apply font-bold;

  margin-top: 22px;
  font-size: 32px;
}
.section-content__desc {
  @apply text-black;

  margin-top: 23px;
  line-height: 34px;
  font-size: 20px;
  max-width: 525px;
}
</style>