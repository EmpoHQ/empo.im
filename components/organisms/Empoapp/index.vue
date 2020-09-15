<template>
  <div class="empoapp">
    <vue-section-title>
      <vue-image
        :src="require('~/assets/svgs/group_27.svg')"
        class="empoapp__logo"
      />
    </vue-section-title>

    <vue-container>
      <div class="empoapp-content">
        <vue-image
          :src="require('~/assets/imgs/img_mockup_empoapp.png')"
          class="empoapp__img"
        />

        <div>
          <h2>{{ $t('empoapp.title') }}</h2>
          <p>{{ $t('empoapp.description') }}</p>
          <vue-image
            :src="require('~/assets/svgs/img_empoapp_badge.svg')"
            class="empoapp__badge"
            @click="OnBtn"
          />
        </div>
      </div>
    </vue-container>
  </div>
</template>

<script>
export default {
  methods: {
    OnBtn() {
      window.open(
        'https://play.google.com/store/apps/details?id=com.empo.android.empoapp'
      )
    }
  }
}
</script>

<style lang="postcss" scoped>
.empoapp {
  @apply relative;

  background-color: #f3f3f3;
  padding-top: 80px;
  padding-bottom: 80px;
}
@screen md {
  .empoapp {
    background-color: #fff;
    margin-top: 420px;
    padding-bottom: 400px;
  }
}

.empoapp-content {
  /* @apply; */
}
@screen md {
  .empoapp-content {
    /* @apply flex justify-between flex-row-reverse; */
    max-width: 440px;
  }
}

.empoapp__logo {
  width: 120px;
}
@screen md {
  .empoapp__logo {
    width: 222px;
  }
}

.empoapp__img {
  width: 100%;

  margin-top: 80px;
}
@screen md {
  .empoapp__img {
    @apply absolute;

    top: 220px;
    right: 51px;

    margin-top: 0;
    width: 706px;
  }
}

h2 {
  @apply font-semibold;

  margin-top: 40px;
  font-size: 20px;
  line-height: 28px;
  color: #050505;
}
@screen md {
  h2 {
    margin-top: 206px;
    font-size: 32px;
    line-height: 57px;
  }
}

p {
  font-size: 14px;
  line-height: 24px;
  margin-top: 10px;
  color: #050505;
}
@screen md {
  p {
    font-size: 22px;
    line-height: 34px;
  }
}

.empoapp__badge {
  width: 100px;
  margin-top: 40px;
  @apply cursor-pointer;
}
@screen md {
  .empoapp__badge {
    width: 200px;
  }
}
</style>