<template>
  <div>
    <div class="bs--bg" />
    <div class="bs--content">
      <vue-container>
        <vue-image
          src="https://empoapp.s3.ap-northeast-2.amazonaws.com/public/symbol_text_logo.svg"
          class="bs--logo"
        />

        <h3 class="bs--title">
          앰포의 브랜드 컬러는 별이 빛나는 밤하늘의 색깔입니다.
        </h3>
        <n-link to="/" class="bs--link">앰포 브랜드 스토리 보러가기 ></n-link>
      </vue-container>
    </div>
    <div class="bs--bg" />
  </div>
</template>

<style lang="postcss" scoped>
.bs--bg {
  background-color: #eeeeee;
  height: 18px;

  box-shadow: inset 0 0 4px 0px rgba(0, 0, 0, 0.2);
}
@screed md {
  .bs--bg {
    height: 52px;
    box-shadow: inset 0 1px 20px rgba(0, 0, 0, 0.2);
  }
}

.bs--content {
  @apply bg-brand-story bg-cover bg-no-repeat text-center text-white;

  padding-top: 95px;
  padding-bottom: 95px;
}

@screen md {
  .bs--content {
    padding-top: 303px;
    padding-bottom: 262px;
  }
}

.bs--logo {
  @apply text-center;

  /* width: 261px; */
}

.bs--title {
  @apply font-light;

  margin-top: 24px;
  font-size: 12px;
  line-height: 18px;
}
@screen md {
  .bs--title {
    margin-top: 59px;
    font-size: 22px;
  }
}

.bs--link {
  @apply block;

  margin-top: 10px;
  font-size: 16px;
  line-height: 28px;
}
@screen md {
  .bs--link {
    margin-top: 18px;
    font-size: 32px;
  }
}
</style>