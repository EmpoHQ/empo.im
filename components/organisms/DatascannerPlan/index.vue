<template>
  <div class="ds-plan">
    <vue-container>
      <div class="ds-plan__body">
        <div class="ds-plan__img-wrapper">
          <vue-image
            :src="require('~/assets/imgs/img_datascanner_2_020.png')"
            class="ds-plan__img"
          />
        </div>

        <div class="ds-plan__content">
          <h2 v-html="$t('datascannerPlan.title')" />
          <p>{{ $t('datascannerPlan.description') }}</p>
        </div>
      </div>
    </vue-container>
  </div>
</template>

<style lang="postcss">
.ds-plan {
  padding: 100px 0;
}

@screen md {
  .ds-plan__body {
    @apply flex flex-row-reverse justify-end;
  }
}

.ds-plan__img-wrapper {
  padding: 0 70px;
}
@screen md {
  .ds-plan__img-wrapper {
    @apply flex-1;

    max-width: 434px;
    padding: 0;
  }
}

.ds-plan__img {
  @apply w-full;
}

.ds-plan__content {
  max-width: 189px;
}
@screen md {
  .ds-plan__content {
    max-width: 100%;
    margin-right: 111px;
  }
}

.ds-plan h2 {
  @apply font-semibold;
  color: #050505;
  margin-top: 32px;
  font-size: 16px;
  line-height: 24px;

  & > strong {
    font-size: 30px;
  }
}
@screen md {
  .ds-plan h2 {
    margin-top: 32px;
    font-size: 38px;
    line-height: 80px;
    max-width: 381px;

    & > strong {
      font-size: 72.8px;
    }
  }
}

.ds-plan p {
  color: #050505;
  margin-top: 17px;
  font-size: 14px;
  line-height: 24px;
}
@screen md {
  .ds-plan p {
    margin-top: 31px;
    max-width: 536px;
    font-size: 24px;
    line-height: 34px;
  }
}
</style>