<template lang="pug">
  div(class="container")
    main(class="main")
      section(class="section")
        div(class="mainVisual")
          main-title
        div(class="section__btn")
          common-text-btn(title="WHO ?" link="/about/")
      section(class="section")
        common-title
          span WORKS
          span 最新のお仕事の実績や、自主制作
        works-list(:worksLength="3")
        div(class="section__btn")
          common-text-btn(title="MORE" link="/works/")
      section(class="section")
        common-title
          span ARTICLES
          span 最新の記事
        feed-panel(:isPagenagtion="false")
        div(class="section__btn")
          common-text-btn(title="MORE" link="/articles/")
</template>

<script>
import CommonTitle from '@/components/CommonTitle'
import CommonTextBtn from '@/components/CommonTextBtn'
import FeedPanel from '@/components/FeedPanel'
import WorksList from '@/components/WorksList'
import MainTitle from '@/components/MainTitle'

export default {
  components: {
    CommonTitle,
    CommonTextBtn,
    FeedPanel,
    WorksList,
    MainTitle,
  },
  head() {
    return this.$setMeta({
      topFlag: true,
      title: 'TOP | HTMLGO',
      description: 'WEB技術を書き連ねるサイト',
      url: 'https://htmlgo.site/',
    })
  },
}
</script>

<style lang="scss" scoped>
$top_bp: 800px;
.main {
  max-width: 900px;
  margin: 0 auto 0;
  min-height: 300px;
  padding: 0 var(--s7) 0;
}
.section {
  border-bottom: 1px solid var(--borderColor);
  padding: 0 0 var(--s10);
  margin: 0 0 var(--s20);
  @include max-screen($top_bp) {
    padding: 0 0 var(--s5);
    margin: 0 0 var(--s10);
  }
}
.section__btn {
  text-align: center;
}
.mainVisual {
  text-align: center;
  background: var(--mainColor);
  padding: var(--s22) var(--s7);
  margin: 0 0 var(--s12);
  svg {
    max-width: 100%;
    box-sizing: border-box;
  }
  @include max-screen($top_bp) {
    padding: var(--s10) var(--s7);
    margin: 0 0 var(--s6);
  }
}
</style>
