<template>
  <footer>
    <div style="padding-top: 58px; padding-bottom: 85.5px">
      <ul class="space-x-10">
        <li
          v-for="item in NavigationItems"
          :key="item.title"
          class="inline-block"
        >
          <a :href="item.href" class="nav--item">{{ item.title }}</a>
        </li>
      </ul>
      <ul
        style="margin-top: 27.5px"
        class="flex items-center flex-wrap space-x-10"
      >
        <li
          v-for="item in InfoItems(1)"
          :key="item.definition"
          class="info--item"
        >
          <span class="info--definition">{{ item.definition }}</span>
          <span>:</span>
          <span>{{ item.description }}</span>
        </li>
      </ul>
      <vue-copyright class="footer--copyright" />
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    NavigationItems() {
      return [
        {
          title: '회사소개',
          href: '/about'
        },
        {
          title: '채용정보',
          href: '/recruit'
        },
        {
          title: '서비스이용약관',
          href: '/terms'
        },
        {
          title: '개인정보처리방침',
          href: '/privacy'
        },
        {
          title: '위치기반서비스 이용약관',
          href: '/location_privacy'
        },
        {
          title: '고객센터',
          href: '/contact'
        },
        {
          title: '제휴/광고 문의',
          href: '/sponsored'
        },
        {
          title: '공지사항',
          href: '/notice'
        }
      ]
    }
  },
  methods: {
    InfoItems(id) {
      switch (id) {
        case 1:
          return [
            {
              definition: '상호명',
              description: '앰포 주식회사'
            },
            {
              definition: '이메일(고객문의)',
              description: 'support@empoapp.com'
            },
            {
              definition: '대표이사',
              description: '이재형'
            },
            {
              definition: '사업자등록번호',
              description: '810-88-01030'
            },
            {
              definition: '통신판매업신고번호',
              description: '2018-인천동구-0094'
            },
            {
              definition: '주소',
              description: '인천광역시 동구 인중로 389 지동 2층'
            }
          ]

        case 2:
        default:
          return []
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.nav--item {
  @apply inline-block;
  @apply uppercase;

  color: #3c3c3c;
  font-size: 16px;
  font-weight: 600;
}

.info--item {
  color: #979797;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;

  /* margin-right: 20px; */
}
.info--definition {
  font-weight: 600;
}
.info--description {
  font-weight: 300;
}

.footer--copyright {
  @apply block;

  color: #979797;
  margin-top: 51px;
  font-weight: 600;
}
</style>