<template>
  <div class="hero--title">
    <h2 v-if="$slots.default"><slot /></h2>
    <div v-if="$slots.title">
      <slot name="title" />
    </div>
    <div class="divider" :class="['divider--' + dividerColor]" />
  </div>
</template>

<script>
export default {
  props: {
    dividerColor: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="postcss" scoped>
.hero--title {
  @apply text-center;
}

h2 {
  @apply text-black;

  font-size: 30px;
  font-weight: bold;
}

.divider {
  @apply inline-block;

  line-height: 0;
  margin-top: 24px;
  margin-bottom: 0;
  width: 84px;
  height: 3px;
}
.divider--default {
  @apply bg-black;
}
.divider--primary {
  @apply bg-primary-500;
}
</style>