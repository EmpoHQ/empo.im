<template>
  <div class="kpi">
    <vue-container>
      <div class="kpi-wrapper space-y-4 md:space-y-0">
        <div v-for="card in Cards" :key="card.value" class="card">
          <vue-image :src="card.src" class="kpi-img" />

          <div>
            <h4>{{ card.key }}</h4>
            <p>
              <strong v-if="card.value">{{ card.value }}</strong>
              <span v-if="card.unit">{{ card.unit }}</span>
            </p>
            <div v-if="card.etc" class="kpi--etc">{{ card.etc }}</div>
          </div>
        </div>
      </div>
    </vue-container>
  </div>
</template>

<script>
export default {
  computed: {
    Cards() {
      return [
        {
          src: require('~/assets/svgs/ic_empoapp_download.svg'),
          key: this.$t('kpi.kpi1.key'),
          value: this.$t('kpi.kpi1.value'),
          unit: this.$t('kpi.kpi1.unit'),
          etc: this.$t('kpi.kpi1.etc')
        },
        {
          src: require('~/assets/svgs/ic_empoapp_datatrade.svg'),
          key: this.$t('kpi.kpi2.key'),
          value: this.$t('kpi.kpi2.value'),
          unit: this.$t('kpi.kpi2.unit'),
          etc: this.$t('kpi.kpi2.etc')
        },
        {
          src: require('~/assets/svgs/ic_empoapp_country.svg'),
          key: this.$t('kpi.kpi3.key'),
          value: this.$t('kpi.kpi3.value'),
          unit: this.$t('kpi.kpi3.unit'),
          etc: this.$t('kpi.kpi3.etc')
        },
        {
          src: require('~/assets/svgs/ic_empoapp_coverage.svg'),
          key: this.$t('kpi.kpi4.key'),
          value: this.$t('kpi.kpi4.value'),
          unit: this.$t('kpi.kpi4.unit'),
          etc: this.$t('kpi.kpi4.etc')
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.kpi {
  padding: 100px 0;
}
@screen md {
  .kpi {
    padding-bottom: 200px;
  }
}

.kpi-wrapper {
  /* @apply flex; */
}
@screen md {
  .kpi-wrapper {
    @apply grid grid-cols-2 gap-4;
  }
}

.card {
  @apply flex;

  padding: 32px 26px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
}
@screen md {
  .card {
    padding: 50px 80px;
  }
}

.kpi-img {
  width: 45px;
  margin-right: 29px;
}
@screen md {
  .kpi-img {
    width: 76px;
    margin-right: 60px;
  }
}

h4 {
  /* @apply font-light; */
  font-size: 12px;
  color: #050505;
}
@screen md {
  h4 {
    font-size: 20px;
  }
}

p {
  margin-top: -2px;

  & > strong {
    @apply font-medium;
    font-size: 24px;
  }

  & > span {
    font-size: 16px;
  }
}
@screen md {
  p {
    & > strong {
      @apply font-medium;
      font-size: 38px;
    }

    & > span {
      font-size: 20px;
    }
  }
}

.kpi--etc {
  @apply font-semibold;
  font-size: 12px;
  line-height: 15px;
  color: #050505;
}
@screen md {
  .kpi--etc {
    font-size: 20px;
  }
}
</style>