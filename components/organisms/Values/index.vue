<template>
  <div class="values">
    <div class="values-container">
      <vue-section-title>VALUES</vue-section-title>

      <div class="values__card-container space-y-40">
        <vue-value-card
          v-for="item in Items"
          :key="item.title"
          :src="item.src"
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
          title: '어디서든지',
          subTitle: '01.',
          description:
            '데이터는 이미 모든 곳에서 쓰이고 있습니다.<br>앰포는 당신의 데이터가 남김없이 소비될 수 있도록 돕습니다. ',
          src: require('~/assets/imgs/img_ubiquitous.png')
        },
        {
          title: '필수적인',
          subTitle: '02.',
          description:
            '앰포는 일상 속에서 당신의 일, 친구, 가족에 온전히 집중할 수 있도록 돕습니다.',
          src: require('~/assets/imgs/img_essential.png')
        },
        {
          title: '데이터 소비의 새로운 기준',
          subTitle: '03.',
          description:
            '데이터를 현금처럼 주고 받고, 모으고, 거래할 수 있는 플랫폼을 통해 새로운 데이터 소비문화를 만들고 있습니다.',
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
</style>