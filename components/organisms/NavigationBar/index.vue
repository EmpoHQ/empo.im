<template>
  <nav class="relative">
    <vue-container>
      <div class="flex justify-between items-center">
        <a href="/"><vue-logo class="nav--logo" /></a>

        <!-- Desktop menus -->
        <ul class="hidden md:flex align-middle items-center space-x-20">
          <li v-for="item in NavigationItems" :key="item.title">
            <a :href="item.href" :target="item.target" class="nav--item">{{
              item.title
            }}</a>
          </li>
          <vue-translate />
        </ul>

        <!-- Mobile menu icon -->
        <div class="flex md:hidden items-center space-x-4">
          <vue-translate />
          <vue-image
            :src="require('~/assets/svgs/btn_menu.svg')"
            class="nav--menu-icon"
            @click="isOpen = !isOpen"
          />
        </div>
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
        <vue-container class="bg-white" style="padding-bottom: 10.5px">
          <ul>
            <li v-for="(item, i) in NavigationItems" :key="item.title">
              <div v-if="i" class="slide__menu-divider" />
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
          href: '/values',
          target: '_self'
        },
        {
          title: 'empo app',
          href:
            'https://play.google.com/store/apps/details?id=com.empo.android.empoapp',
          target: '_blank'
        },
        {
          title: 'datascanner',
          href: 'https://www.datascanner.io',
          target: '_blank'
        },
        {
          title: 'story',
          href: '/story',
          target: '_self'
        },
        {
          title: 'bi',
          href: '/bi',
          target: '_self'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.nav--logo {
  width: 78px;
}
@screen md {
  .nav--logo {
    width: 139.5px;
  }
}

.nav--item {
  @apply block;
  @apply uppercase;
  @apply text-center;
  @apply text-black;
  @apply font-semibold;

  font-size: 16px;
  padding-top: 15.5px;
  padding-bottom: 15.5px;
}
@screen md {
  .nav--item {
    @apply inline-block;

    color: #050505;
    font-size: 20px;
    padding-top: 33.5px;
    padding-bottom: 35px;
  }
}

.nav--menu-icon {
  @apply inline-block;

  padding-top: 18px;
  padding-bottom: 20px;
}

.slide {
  @apply fixed inset-x-0 bottom-0 overflow-hidden z-50 bg-gray-800 bg-opacity-75;

  top: 58px;
}
.slide__menu-divider {
  @apply h-px;
  background-color: #ccc;
}
</style>