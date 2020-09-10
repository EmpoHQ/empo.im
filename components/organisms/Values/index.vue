<template>
  <div class="values">
    <div style="padding-top: 281px">
      <vue-section-title>VALUES</vue-section-title>
    </div>

    <div style="padding-top: 179.5px; padding-bottom: 230.5px">
      <vue-value-card
        v-for="item in Items"
        :key="item.title"
        :src="item.src"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Items() {
      return [
        {
          title: 'Ubiquitous',
          description:
            '데이터는 이제 어디서든지 필요합니다.<br>하지만 여러 국가에서 데이터 불균형이 문제되고 있습니다.<br>앰포는 모두가 어디에서나 데이터를 부족함 없이 사용할 수 있게 돕습니다.',
          src: require('~/assets/imgs/img_essential.png')
        },
        {
          title: 'Essential',
          description:
            '데이터가 없는 생활은 상상하기 힘든 것처럼<br>앰포 또한 일상 생활에 스며든 필수적인 서비스가 될 것입니다.',
          src: require('~/assets/imgs/img_essential.png')
        },
        {
          title: 'Essential',
          description:
            '데이터가 없는 생활은 상상하기 힘든 것처럼<br>앰포 또한 일상 생활에 스며든 필수적인 서비스가 될 것입니다.',
          src: require('~/assets/imgs/img_essential.png')
        }
      ]
    }
  }
}
</script>