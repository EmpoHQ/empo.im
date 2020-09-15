<template>
  <div class="hero">
    <vue-container>
      <div class="hero-container">
        <h1 class="hero--title">{{ $t('hero.title') }}</h1>
        <p class="hero--desc">{{ $t('hero.desc') }}</p>
      </div>
    </vue-container>
  </div>
</template>

<style lang="postcss" scoped>
.hero {
  @apply bg-hero bg-cover bg-no-repeat text-white;

  height: 276px;
}
@screen md {
  .hero {
    /* height: 658px; */
    height: unset;
  }
}

.hero-container {
  padding-top: 100px;
  padding-bottom: 94px;
}
@screen md {
  .hero-container {
    padding-top: 294.5px;
    padding-bottom: 292.5px;
  }
}

.hero--title {
  font-size: 22px;
  /* line-height: 28px; */

  font-weight: 500;
}
@screen md {
  .hero--title {
    font-size: 48px;
  }
}

.hero--desc {
  font-size: 14px;
  /* line-height: 24px; */
  margin-top: 6px;

  max-width: 185px;
}
@screen md {
  .hero--desc {
    font-size: 22px;
    max-width: 100%;
    margin-top: 27px;
  }
}
</style>