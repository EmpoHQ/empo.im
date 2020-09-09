<template>
  <div class="text-center">
    <vue-section-title divider-color="primary">BI</vue-section-title>

    <vue-image
      src="https://empoapp.s3.ap-northeast-2.amazonaws.com/public/symbol_text_logo.svg"
      class="bi--logo"
    />

    <div class="bi--desc">
      <strong>Empo</strong>는 상점, 시장을 의미하는
      <strong>Emporium</strong>에서 비롯되었습니다.<br />
      심볼은 <strong>'데이터 거래로 사람과 사람을 연결하는 플랫폼'</strong> 을
      의미합니다.
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bi--logo {
  @apply inline-block;

  width: 261px;
  margin-top: 188px;
}

.bi--desc {
  margin-top: 84px;
  font-size: 22px;
}
</style>