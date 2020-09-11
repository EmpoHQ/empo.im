<template>
  <div class="reviews">
    <vue-container>
      <div class="reviews--title-container">
        <vue-section-title>REVIEWS</vue-section-title>
      </div>

      <div>
        <!-- empoapp -->
        <div class="mb-6">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="empo in GetEmpoApp" :key="empo.id" class="review">
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
          <div class="text-center mt-4">
            <vue-image
              :src="require('~/assets/svgs/img_review_logo_empoapp.svg')"
              class="review__logo"
            />
          </div>
        </div>

        <!-- datascanner -->
        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="ds in GetDatascanner" :key="ds.id" class="review">
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
          <div class="text-center mt-4">
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
  computed: {
    GetEmpoApp() {
      return [
        {
          id: 1,
          body: '아이디어도 좋고 활용도도 좋은 어플인거 같아요!!! 강추!!',
          name: '이*희'
        },
        {
          id: 2,
          body:
            '좋은 아이디어네요.<br>사용자들이 늘어, 전국이 와이파이존처럼 되면 참 좋을 듯 해요. 성공하는 날까지 응원할게요.',
          name: ' 메*세데스'
        },
        {
          id: 3,
          body:
            '친구랑 앱 설치하고<br>사용해봤더니 손쉽게 연결이 되네요. 좋아요.',
          name: 's*ng hejin'
        }
      ]
    },
    GetDatascanner() {
      return [
        {
          id: 1,
          body:
            '깔끔하게 잘 구성됐다고 생각합니다.  통신사 광고처럼 느껴지지는 않고, 사용에 용이했습니다.',
          name: '김*연'
        },
        {
          id: 2,
          body:
            '"국내에 알뜰 요금제"라는 주제에 대해 관심도가 높지 않지만, 홈페이지에서 알뜰 요금제가 필요성을 잘 알려주고  알뜰 요금제에 대한 궁금증을 해결할 수 있도록 도와줘서 좋았습니다.',
          name: '최*영'
        },
        {
          id: 3,
          body:
            '핀테크 회사같이 신뢰감이 엄청 드는 정보를 제공하는것 같습니다! 필요한 정보만 딱 보이게 모아 놓아 좋았습니다.',
          name: '정*진'
        }
      ]
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
    /* margin-top: 55px;
    margin-bottom: 27px; */
  }
}

.review__quote {
  @apply block;

  width: 5px;
  height: 5px;
}
@screen md {
  .review__quote {
    width: unset;
  }
}

.review__body {
  @apply font-light;

  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.09px;

  margin-top: 5px;
  margin-bottom: 27px;
}
@screen md {
  .review__body {
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
  width: 62px;
}
@screen md {
  .review__logo {
    /* width: 62px; */
  }
}
</style>