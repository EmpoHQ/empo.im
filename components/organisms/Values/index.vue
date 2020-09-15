

<template>
  <div class="values">
    <div class="values-container">
      <vue-section-title>VALUES</vue-section-title>

      <div class="values__card-container space-y-40 md:space-y-72">
        <vue-value-card
          v-for="item in Items"
          :key="item.title"
          :src="item.src"
          :align="item.align"
          :title="item.title"
          :sub-title="item.subTitle"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Items() {
      return [
        {
          subTitle: '01.',
          title: this.$t('values.title1'),
          description: this.$t('values.description1'),
          src: require('~/assets/imgs/img_ubiquitous.png')
        },
        {
          subTitle: '02.',
          title: this.$t('values.title2'),
          description: this.$t('values.description2'),
          src: require('~/assets/imgs/img_essential.png'),
          align: 'right'
        },
        {
          subTitle: '03.',
          title: this.$t('values.title3'),
          description: this.$t('values.description3'),
          src: require('~/assets/imgs/img_standard.png')
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.values-container {
  padding-top: 100px;
  padding-bottom: 160px;
}

.values__card-container {
  margin-top: 20px;
}
@screen md {
  .values__card-container {
    margin-top: 152.5px;
  }
}
</style>