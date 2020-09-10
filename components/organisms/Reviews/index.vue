<template>
  <div class="reviews">
    <div style="padding-top: 122px">
      <vue-section-title>REVIEWS</vue-section-title>
    </div>

    <div style="padding-top: 184px; padding-bottom: 135px">
      <!-- empoapp -->
      <div class="grid grid-cols-3 gap-4">
        <div v-for="empo in GetEmpoApp" :key="empo.id" class="review">
          <vue-image :src="require('~/assets/svgs/img_review_quotes.svg')" />
          <div class="review__body" v-html="empo.body" />

          <div class="review__bottom">
            <div class="flex items-center">
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
      <div class="text-center" style="margin-top: 30px">
        <vue-image
          :src="require('~/assets/svgs/img_review_logo_empoapp.svg')"
        />
      </div>

      <!-- datascanner -->
      <div class="grid grid-cols-3 gap-4" style="margin-top: 90px">
        <div v-for="ds in GetDatascanner" :key="ds.id" class="review">
          <vue-image :src="require('~/assets/svgs/img_review_quotes.svg')" />
          <div class="review__body" v-html="ds.body" />

          <div class="review__bottom">
            <div class="flex items-center">
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
      <div class="text-center" style="margin-top: 30px">
        <vue-image
          src="https://datascanner.s3.ap-northeast-2.amazonaws.com/public/logo/text.svg"
          style="width: 153px"
        />
      </div>
    </div>
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
.review {
  @apply bg-white;
  @apply relative;

  padding: 36px;
  height: 346px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.review__body {
  margin-top: 31px;
  margin-bottom: 136px;
}

.review__bottom {
  @apply absolute;

  left: 36px;
  right: 36px;
  bottom: 36px;
}
.review__name {
  @apply font-semibold;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: -0.24px;
  color: #050505;
  margin-right: 28px;
}
.review__star {
  @apply inline-block;

  margin-right: 6px;
}
</style>