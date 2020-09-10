<template>
  <nav class="relative">
    <vue-container>
      <div class="flex justify-between items-center">
        <vue-logo class="nav--logo" />

        <ul class="hidden md:flex align-middle space-x-24">
          <li v-for="item in NavigationItems" :key="item.title">
            <a :href="item.href" class="nav--item">{{ item.title }}</a>
          </li>
        </ul>

        <div class="md:hidden" @click="isOpen = !isOpen">Menu</div>
      </div>
    </vue-container>

    <transition
      enter-active-class="ease-in-out duration-500"
      enter-class="bg-opacity-0"
      enter-to-class="bg-opacity-75"
      leave-active-class="ease-in-out duration-500"
      leave-class=" bg-opacity-75"
      leave-to-class="bg-opacity-0"
    >
      <div class="slide" v-show="isOpen">
        <vue-container class="bg-white">
          <ul>
            <li v-for="item in NavigationItems" :key="item.title">
              <a :href="item.href" class="nav--item">{{ item.title }}</a>
            </li>
          </ul>
        </vue-container>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
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

.slide {
  @apply fixed inset-x-0 bottom-0 overflow-hidden z-50 bg-gray-800 bg-opacity-75;

  top: 50px;
}
</style>