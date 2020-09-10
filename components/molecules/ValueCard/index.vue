<template>
  <div class="value-card">
    <vue-container class="relative">
      <vue-image
        :src="src"
        style="max-width: 542px; right: 0; top: -52.5px"
        class="md:absolute"
      />
      <vue-section-content
        sub-title="01."
        :title="title"
        :description="description"
      />
    </vue-container>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'src']
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