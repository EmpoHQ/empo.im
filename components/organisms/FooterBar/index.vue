<template>
  <footer>
    <vue-container>
      <div class="footer-sns">
        <vue-image
          :src="require('~/assets/svgs/ic_footer_youtube.svg')"
          class="footer-sns__img"
        />
        <vue-image
          :src="require('~/assets/svgs/ic_footer_insta.svg')"
          class="footer-sns__img"
        />
        <vue-image
          :src="require('~/assets/svgs/ic_footer_google.svg')"
          class="footer-sns__img"
        />
        <vue-image
          :src="require('~/assets/svgs/ic_footer_facebook.svg')"
          class="footer-sns__img"
        />
        <vue-image
          :src="require('~/assets/svgs/ic_footer_medium.svg')"
          class="footer-sns__img"
        />
      </div>

      <div class="footer-content">
        <ul>
          <li
            v-for="item in NavigationItems"
            :key="item.title"
            class="inline-block"
          >
            <a :href="item.href" class="nav--item">{{ item.title }}</a>
          </li>
        </ul>

        <ul v-if="$store.state.locales.locale === 'ko'" class="footer--info">
          <li
            v-for="item in InfoItems(1)"
            :key="item.definition"
            class="footer--info-item"
          >
            <span class="info--definition">{{ item.definition }}</span>
            <span>:</span>
            <span>{{ item.description }}</span>
          </li>
        </ul>

        <ul v-if="$store.state.locales.locale === 'en'" class="footer--info">
          <li v-for="item in InfoItems(1)" :key="item.definition">
            {{ item.description }}
          </li>
        </ul>

        <vue-copyright class="footer--copyright" />
      </div>
    </vue-container>
  </footer>
</template>

<script>
export default {
  computed: {
    NavigationItems() {
      return [
        {
          title: this.$t('footer.about'),
          href: '/about'
        },
        {
          title: this.$t('footer.recruit'),
          href: '/recruit'
        },
        {
          title: this.$t('footer.termsOfServices'),
          href: '/terms'
        },
        {
          title: this.$t('footer.privacyPolicy'),
          href: '/privacy'
        },
        {
          title: this.$t('footer.termsOfLocationBasedServices'),
          href: '/location_privacy'
        },
        {
          title: this.$t('footer.customerSupport'),
          href: '/contact'
        },
        {
          title: this.$t('footer.contact'),
          href: '/sponsored'
        },
        {
          title: this.$t('footer.notice'),
          href: '/notice'
        }
      ]
    }
  },
  methods: {
    InfoItems(id) {
      switch (id) {
        case 1:
          return this.$t('info')

        case 2:
        default:
          return []
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
footer {
  background-color: #fff;
  padding-bottom: 155px;
}
@screen md {
  footer {
    padding-top: 58px;
    padding-bottom: 85.5px;
    background-color: #f0f0f0;
  }
}

.footer-sns {
  @apply flex justify-around items-center;
}
@screen md {
  .footer-sns {
    @apply justify-end;
  }
  .footer-sns__img {
    margin-left: 18px;
  }
}

.nav--item {
  @apply inline-block;
  /* @apply uppercase; */

  color: #3c3c3c;
  font-size: 12px;
  font-weight: 600;
  margin-right: 14px;
}
@screen md {
  .nav--item {
    font-size: 16px;
    margin-right: 30.6px;
  }
}

.footer-content {
  margin-top: 42px;
}
@screen md {
  .footer-content {
    margin-top: 69px;
  }
}

.footer--info {
  color: #979797;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0;

  margin-top: 60px;
}
@screen md {
  .footer--info {
    font-size: 16px;
  }
}

.footer--info-item {
  @apply inline-block;

  margin-right: 14px;
}
@screen md {
  .footer--info {
    font-size: 16px;
    line-height: 24px;
  }
}

.info--definition {
  font-weight: 600;
}
.info--description {
  font-weight: 300;
}

.footer--copyright {
  @apply block;
  @apply font-semibold;

  color: #979797;
  margin-top: 40px;
  font-size: 10px;
  font-weight: 600;
}
@screen md {
  .footer--copyright {
    @apply block;

    font-size: 16px;
    margin-top: 51px;
  }
}
</style>