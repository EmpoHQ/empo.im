<template>
  <div class="datascanner">
    <vue-section-title>
      <vue-image
        src="https://datascanner.s3.ap-northeast-2.amazonaws.com/public/logo/text.svg"
        class="datascanner__logo"
      />
    </vue-section-title>

    <div>
      <vue-container>
        <div class="ds-body">
          <div class="ds__img-wrapper">
            <vue-image
              :src="require('~/assets/imgs/img_mockup_datascanner.png')"
              class="ds__img"
            />
          </div>
          <div class="ds-content">
            <h2 class="w-full">{{ $t('datascanner.title') }}</h2>
            <p>{{ $t('datascanner.description') }}</p>
            <vue-button class="ds__btn" @click="OnBtn">{{
              $t('datascanner.btn')
            }}</vue-button>
          </div>
        </div>
      </vue-container>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    OnBtn() {
      window.open('https://www.datascanner.io')
    }
  }
}
</script>

<style lang="postcss" scoped>
.datascanner {
  @apply relative;

  background-color: #f3f3f3;
  padding-top: 80px;
  padding-bottom: 80px;
}
@screen md {
  .datascanner {
    background-color: #fff;
    margin-top: 420px;
    padding-bottom: 400px;
  }
}

.datascanner__logo {
  width: 120px;
}
@screen md {
  .datascanner__logo {
    width: 222px;
  }
}

@screen md {
  .ds-body {
    @apply flex;
    margin-top: 80px;
  }
}

.ds__img-wrapper {
  width: 100%;
  margin-top: 80px;
}
@screen md {
  .ds__img-wrapper {
    flex: 1;
    max-width: 632.9px;
    margin-right: 71.7px;
  }
}

.ds__img {
  @apply inline-block;
  @apply w-full;
}

.ds-content {
  max-width: 410px;
}
@screen md {
  .ds-content {
    /* margin-left: 71.7px; */
    margin-top: 40px;
  }
}

h2 {
  @apply font-semibold;

  font-size: 20px;
  line-height: 28px;
  margin-top: 20px;
}
@screen md {
  h2 {
    margin-top: 80px;
    font-size: 32px;
    line-height: 42px;
    color: #050505;
  }
}

p {
  color: #050505;
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}
@screen md {
  p {
    margin-top: 10px;
    font-size: 22px;
    line-height: 34px;
  }
}

.ds__btn {
  @apply block;
  margin-top: 40px;
}
</style>