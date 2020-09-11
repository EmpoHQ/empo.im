<template>
  <div class="value-card">
    <vue-container class="relative">
      <vue-image
        :src="src"
        style="width: 100%; max-width: 542px; right: 0; top: -52.5px"
        class="md:absolute"
      />

      <div class="section-content">
        <p class="section-content__sub-title">{{ subTitle }}</p>
        <h3 class="section-content__title">{{ title }}</h3>
        <p class="section-content__desc" v-html="description" />
      </div>
    </vue-container>
  </div>
</template>

<script>
export default {
  props: ['title', 'subTitle', 'description', 'src']
}
</script>

<style lang="postcss" scoped>
.section-content {
  margin-top: 20px;
}

.section-content__sub-title {
  @apply text-black;
  @apply font-semibold;

  font-size: 22px;
}
@screen md {
  .section-content__sub-title {
    font-size: 30px;
  }
}
.section-content__title {
  @apply text-primary-500;
  @apply uppercase;
  @apply font-semibold;

  margin-top: 10px;
  font-size: 20px;
}
@screen md {
  .section-content__title {
    margin-top: 22px;
    font-size: 32px;
  }
}

.section-content__desc {
  @apply text-black;
  @apply font-light;

  margin-top: 14px;
  font-size: 14px;
  line-height: 24px;
}
@screen md {
  .section-content__desc {
    margin-top: 23px;
    line-height: 34px;
    font-size: 20px;
    max-width: 525px;
  }
}
</style>