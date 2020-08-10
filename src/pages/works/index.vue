<template lang="pug">
  div(class="container")
    main(class="main")
      common-title
        span WORKS
        span お仕事の実績や、自主制作のまとめページです
      div(class="works__filter")
        div(class="works__filterChild")
          select(class="works__filterSelect" v-model="currentCategory")
            option(value="") Category
            option(v-for="category in worksCategory" :key="category.id" :value="category.category_slug") {{category.category_label}}
        div(class="works__filterChild")
          select(class="works__filterSelect" v-model="currentTechnology")
            option(value="") Technology
            option(v-for="technology in worksTechnology" :key="technology.id" :value="technology.technology_slug") {{technology.technology_label}}
      WorksList(:currentCategory="currentCategory" :currentTechnology="currentTechnology")
      footer(class="works__footer")
        div(class="works__back")
          common-icon-btn(:title="'BACK TO TOP'" link="/" :blank="false" :icon="['fas', 'home']" color="'#4267B2'")
</template>

<script>
import { mapState } from 'vuex'
import CommonTitle from '@/components/CommonTitle'
import CommonIconBtn from '@/components/CommonIconBtn'
import IconQiita from '@/components/icons/IconQiita'
import IconHatena from '@/components/icons/IconHatena'
import WorksList from '@/components/WorksList'

export default {
  components: {
    CommonTitle,
    CommonIconBtn,
    IconQiita,
    IconHatena,
    WorksList,
  },
  data() {
    return {
      currentCategory: '',
      currentTechnology: '',
    }
  },
  computed: {
    ...mapState(['worksCategory', 'worksTechnology']),
  },
  methods: {
    setCurrenCategory(e) {
      console.log(e)
    },
    setCurrentTechnology(e) {
      console.log(e)
    },
  },
  head() {
    return this.$setMeta({
      title: 'WORKS | HTMLGO',
      description: '実績を紹介しています。',
      url: 'https://htmlgo.site/works/',
    })
  },
}
</script>

<style lang="scss" scoped>
$works_bp: 700px;

.main {
  max-width: 900px;
  margin: 0 auto var(--s20);
  padding: 0 var(--s5);
}
.works__filter {
  display: flex;
  margin: 0 0 var(--s5);
  @include max-screen($works_bp) {
    display: block;
  }
}

.works__filterChild {
  position: relative;
  &:before {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    content: '';
    display: block;
    transform: rotate(45deg) translate(-1px, -1px);
    width: 5px;
    height: 5px;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
  }
}
.works__filterChild:not(:last-of-type) {
  margin-right: 20px;
  @include max-screen($works_bp) {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
.works__filterSelect {
  position: relative;
  outline: none;
  text-indent: 0.01px;
  text-overflow: '';
  background: none transparent;
  vertical-align: middle;
  font-size: inherit;
  color: inherit;
  appearance: none;
  border-radius: none;
  height: 2.2em;
  font-size: 1.6rem;
  padding: 0 35px 0 10px;
  cursor: pointer;
  @include max-screen($works_bp) {
    width: 100%;
  }
}
.works__footer {
  border-top: 1px solid var(--borderColor);
  padding-top: var(--s11);
  margin-top: var(--s11);
}
.works__back {
  text-align: center;
}
</style>
