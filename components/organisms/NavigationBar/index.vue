<template>
  <nav>
    <div class="flex justify-between items-center">
      <vue-image
        src="https://empoapp.s3.ap-northeast-2.amazonaws.com/public/symbol_text_logo.svg"
        class="nav--logo"
      />
      <ul class="flex align-middle space-x-24">
        <li v-for="item in NavigationItems" :key="item.title">
          <a :href="item.href" class="nav--item">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    NavigationItems() {
      return [
        {
          title: 'values',
          href: '/values'
        },
        {
          title: 'empo app',
          href: '/empoapp'
        },
        {
          title: 'datascanner',
          href: '/datascanner'
        },
        {
          title: 'story',
          href: '/story'
        },
        {
          title: 'bi',
          href: '/bi'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.nav--logo {
  width: 139.5px;
}

.nav--item {
  @apply inline-block;
  @apply uppercase;

  color: #050505;
  font-size: 20px;
  font-weight: 500;
  padding-top: 33.5px;
  padding-bottom: 35px;
}
</style>