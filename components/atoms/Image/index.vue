<template>
  <img :src="src" :alt="alt" @click="$emit('click')" />
</template>

<script>
export default {
  props: ['src', 'alt']
}
</script>

<style lang="postcss" scoped>
img {
  @apply inline-block;
}
</style>