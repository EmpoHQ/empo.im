<template>
  <div class="bi">
    <vue-container>
      <div class="text-center">
        <vue-section-title divider-color="primary">BI</vue-section-title>

        <vue-image
          src="https://empoapp.s3.ap-northeast-2.amazonaws.com/public/symbol_text_logo.svg"
          class="bi--logo"
        />

        <div class="bi--desc" v-html="$t('bi.description')"></div>
      </div>
    </vue-container>
  </div>
</template>

<style lang="postcss" scoped>
.bi {
  padding-top: 200px;
  padding-bottom: 200px;
}
@screen md {
  .bi {
    padding-top: 400px;
    padding-bottom: 400px;
  }
}

.bi--logo {
  @apply inline-block;

  width: 131px;
  margin-top: 60px;
}
@screen md {
  .bi--logo {
    width: 261px;
    margin-top: 188px;
  }
}

.bi--desc {
  margin-top: 40px;
  font-size: 14px;
  line-height: 24px;
}
@screen md {
  .bi--desc {
    margin-top: 84px;
    font-size: 24px;
    line-height: 40px;
  }
}
</style>