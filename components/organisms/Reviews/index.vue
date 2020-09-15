<template>
  <div class="reviews">
    <vue-container>
      <div class="reviews--title-container">
        <vue-section-title>REVIEWS</vue-section-title>
      </div>

      <div>
        <!-- empoapp -->
        <div class="mb-6">
          <div class="grid md:hidden grid-cols-2 gap-4">
            <div v-for="empo in GetEmpoApp(2)" :key="empo.id" class="review">
              <vue-image
                :src="require('~/assets/svgs/img_review_quotes.svg')"
                class="review__quote"
              />
              <div class="review__body" v-html="empo.body" />

              <div class="review__bottom">
                <div class="md:flex md:items-center">
                  <div class="review__name">{{ empo.name }}</div>
                  <vue-image
                    v-for="i in 5"
                    :key="i"
                    :src="require('~/assets/svgs/ic_review_star_full.svg')"
                    class="review__star"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="empo in GetEmpoApp(3)" :key="empo.id" class="review">
              <vue-image
                :src="require('~/assets/svgs/img_review_quotes.svg')"
                class="review__quote"
              />
              <div class="review__body" v-html="empo.body" />

              <div class="review__bottom">
                <div class="review__name">{{ empo.name }}</div>
                <vue-image
                  v-for="i in 5"
                  :key="i"
                  :src="require('~/assets/svgs/ic_review_star_full.svg')"
                  class="review__star"
                />
              </div>
            </div>
          </div>
          <div class="text-center">
            <vue-image
              :src="require('~/assets/svgs/img_review_logo_empoapp.svg')"
              class="review__logo"
            />
          </div>
        </div>

        <!-- datascanner -->
        <div class="md:mt-24">
          <div class="grid md:hidden grid-cols-2 gap-4">
            <div v-for="ds in GetDatascanner(2)" :key="ds.id" class="review">
              <vue-image
                :src="require('~/assets/svgs/img_review_quotes.svg')"
                class="review__quote"
              />
              <div class="review__body" v-html="ds.body" />

              <div class="review__bottom">
                <div class="md:flex md:items-center">
                  <div class="review__name">{{ ds.name }}</div>
                  <vue-image
                    v-for="i in 5"
                    :key="i"
                    :src="require('~/assets/svgs/ic_review_star_full.svg')"
                    class="review__star"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:grid grid-cols-3 gap-4">
            <div v-for="ds in GetDatascanner(3)" :key="ds.id" class="review">
              <vue-image
                :src="require('~/assets/svgs/img_review_quotes.svg')"
                class="review__quote"
              />
              <div class="review__body" v-html="ds.body" />

              <div class="review__bottom">
                <div class="review__name">{{ ds.name }}</div>
                <vue-image
                  v-for="i in 5"
                  :key="i"
                  :src="require('~/assets/svgs/ic_review_star_full.svg')"
                  class="review__star"
                />
              </div>
            </div>
          </div>
          <div class="text-center">
            <vue-image
              src="https://datascanner.s3.ap-northeast-2.amazonaws.com/public/logo/text.svg"
              class="review__logo"
            />
          </div>
        </div>
      </div>
    </vue-container>
  </div>
</template>

<script>
export default {
  methods: {
    GetEmpoApp(num = 3) {
      const data = [this.$t('reviews.empoapp1'), this.$t('reviews.empoapp2')]

      if (num === 3) {
        data.push(this.$t('reviews.empoapp3'))
      }

      return data
    },
    GetDatascanner(num = 3) {
      const data = [
        this.$t('reviews.datascanner1'),
        this.$t('reviews.datascanner2')
      ]

      if (num === 3) {
        data.push(this.$t('reviews.datascanner3'))
      }

      return data
      return data
    }
  }
}
</script>

<style lang="postcss" scoped>
.reviews {
  padding-top: 55px;
  padding-bottom: 200px;
}
@screen md {
  .reviews {
    padding-top: 122px;
    background-color: #f4f4f4;
  }
}

.review {
  @apply bg-white;
  @apply relative;

  padding: 10px;
  height: 148px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
@screen md {
  .review {
    padding: 36px;
    height: 346px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  }
}

.reviews--title-container {
  margin-bottom: 27px;
}
@screen md {
  .reviews--title-container {
    margin-bottom: 184px;
  }
}

.review__quote {
  @apply block;

  width: 5px;
  height: 5px;
}
@screen md {
  .review__quote {
    width: 19px;
    height: 14px;
  }
}

.review__body {
  @apply font-light;

  color: #050505;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.09px;

  margin-top: 5px;
  margin-bottom: 27px;
}
@screen md {
  .review__body {
    @apply font-medium;

    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.2px;
    margin-top: 31px;
    margin-bottom: 136px;
  }
}

.review__bottom {
  @apply absolute;

  left: 10px;
  right: 10px;
  bottom: 10px;
}
@screen md {
  .review__bottom {
    left: 36px;
    right: 36px;
    bottom: 36px;
  }
}

.review__name {
  @apply font-semibold;

  font-size: 8px;
  line-height: 7.4px;
  letter-spacing: -0.24px;
  color: #050505;
}
@screen md {
  .review__name {
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.24px;
    margin-right: 28px;
  }
}

.review__star {
  @apply inline-block;

  width: 6px;
  margin-right: 6px;
}
@screen md {
  .review__star {
    margin-right: 6px;
    width: unset;
  }
}

.review__logo {
  @apply inline-block;

  margin-top: 20px;
  width: 62px;
}
@screen md {
  .review__logo {
    margin-top: 30px;
    width: 141px;
  }
}
</style>