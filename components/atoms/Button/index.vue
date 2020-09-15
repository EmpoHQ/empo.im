<template>
  <button @click="$emit('click')" class="btn"><slot /></button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply bg-primary-500;
  @apply text-white;
  @apply text-center;

  font-size: 12px;
  padding: 13px 32px;
  border-radius: 10px;
}
@screen md {
  .btn {
    font-size: 16px;
    padding: 16px 36px;
  }
}
</style>