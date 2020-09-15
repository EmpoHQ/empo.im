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
  @apply font-bold;

  line-height: 0;
  font-size: 12px;
}
@screen md {
  h2 {
    line-height: unset;
    font-size: 30px;
  }
}

.divider {
  @apply inline-block;

  margin-top: 6px;
  margin-bottom: 0;
  width: 42px;
  height: 1px;
}
@screen md {
  .divider {
    margin-top: 24px;
    height: 3px;
    width: 84px;
  }
}

.divider--default {
  @apply bg-black;
}
.divider--primary {
  @apply bg-primary-500;
}
</style>