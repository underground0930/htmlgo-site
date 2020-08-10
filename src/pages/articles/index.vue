<template lang="pug">
  div(class="container")
    main(class="main")
      common-title
        span ARTICLES
        span 技術系やそれ以外の記事
      feed-panel(:isPagenagtion="true" :unit="16" base="/articles")
      footer(class="articles__footer")
        div(class="articles__back")
          common-icon-btn(:title="'BACK TO TOP'" link="/" :blank="false" :icon="['fas', 'home']" color="'#4267B2'")
</template>

<script>
import CommonTitle from '@/components/CommonTitle'
import CommonIconBtn from '@/components/CommonIconBtn'
import FeedPanel from '@/components/FeedPanel'

export default {
  components: {
    CommonTitle,
    CommonIconBtn,
    FeedPanel,
  },
  data() {
    return {}
  },
  head() {
    return this.$setMeta({
      title: 'ARTICLES | HTMLGO',
      description: '色々なブログの記事のフィードをまとめたものです',
      url: 'https://htmlgo.site/articles/',
    })
  },
}
</script>

<style lang="scss" scoped>
$articles_bp: 700px;

.main {
  max-width: 900px;
  margin: 0 auto var(--s20);
  padding: 0 var(--s5);
  @include max-screen($articles_bp) {
  }
}

.articles__back {
  text-align: center;
}
</style>
