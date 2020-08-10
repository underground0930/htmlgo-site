<template lang="pug">
  div(class="container")
    main(class="main")
      common-title
        span ABOUT
        span このサイトや主について説明しています
      div(class="about__body")
        div(class="about__img")
          img(src="/img/profile.jpg" width="210" height="210")
        div(class="about__sns")
          sns-box
        h3(class="about__title")
          | このサイトについて
        p(class="about__text") このサイト主の「実績紹介」「WEB技術の記事」などをまとめたサイトです。

        h3(class="about__title")
          | プロフィール
        p(class="about__text")
          a(href="https://twitter.com/resistance_gowy" target="_blank") @resistance_gowy
          span (フロントエンドエンジニア)

        p(class="about__text")
          | プロモーションサイト、コーポレートサイト、キャンペーンサイト等の様々なサイトを実装してきました。様々なデバイスに対応させること、更新性の高いサイトを作ることが得意です。ギークというよりかは、周りと協調してプロジェクトを円滑に進めることが得意なタイプ。お仕事をしていて、「とてもやりやすい」と言って頂くことが多いのが強みです。


        h3(class="about__title")
          | 趣味
        p(class="about__text") 漫画、youtubeひたすら見る、筋トレ、プール、散歩。

        h3(class="about__title")
          | 経歴
        ul(class="about__history")
          li
            dl
              dt
                span 1985年
              dd
                span 生誕
          li
            dl
              dt
                span 2009年
              dd
                span 東京理科大学 卒業
          li
            dl
              dt
                span 2009年 - 2011年
              dd
                a(href="https://at21.jp/" target="_blank") あとらす二十一
          li
            dl
              dt
                span 2011年 - 2016年
              dd
                a(href="https://www.sonicjam.co.jp/" target="_blank") SONICJAM Inc.
          li
            dl
              dt
                span 2016年 -
              dd
                span フリーランス

        h3(class="about__title")
          | 経験した技術・ツール
        p(class="about__text") html5 / css3 / Javascript(ES2015) / Vue.js / Nuxt.js / React.js / Wordpress / Docker / Webpack / github / Backlog

        h3(class="about__title")
          | 仕事道具
        ul(class="about__list")
          li
            dl
              dt PC
              dd MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)・(1TB)・(Core i7)・(メモリ32 GB)
          li
            dl
              dt PCモニター
              dd EIZO EV2785-BK
          li
            dl
              dt スマートフォン
              dd iPhone 11 (256GB)

      div(class="about__back")
        common-icon-btn(:title="'BACK TO TOP'" link="/" :blank="false" :icon="['fas', 'home']" color="'#4267B2'")
</template>

<script>
import CommonTitle from '@/components/CommonTitle'
import CommonIconBtn from '@/components/CommonIconBtn'
import SnsBox from '@/components/SnsBox'

export default {
  components: {
    CommonTitle,
    CommonIconBtn,
    SnsBox,
  },
  data() {
    return {
      age: Math.floor(
        (new Date() - new Date('1985-05-12')) / (1000 * 60 * 60 * 24 * 365)
      ),
    }
  },
  head() {
    return this.$setMeta({
      title: 'ABOUT | HTMLGO',
      description: 'このサイトについて',
      url: 'https://htmlgo.site/about/',
    })
  },
}
</script>

<style lang="scss" scoped>
$about_bp: 800px;

.main {
  max-width: 600px;
  margin: 0 auto var(--s20);

  @include max-screen($about_bp) {
    width: auto;
    margin: 0 auto var(--s10);
    padding: 0 var(--s5);
  }
}

.about__body {
  margin: 0 0 var(--s11);
  padding: 0 0 var(--s7);
  border-bottom: 1px solid var(--borderColor);
}

.about__ttl {
  font-size: 1.4rem;
  border-bottom: 1px solid var(--borderColor);
  padding: 0 0 var(--s2);
  margin: var(--s7) 0 var(--s6);

  @include max-screen($about_bp) {
    font-size: 1.2rem;
  }
}

.about__name {
  font-size: 1.6rem;
  margin: 0 0 var(--s2);

  @include max-screen($about_bp) {
    font-size: 1.4rem;
  }
}

.about__text {
  font-size: 1.5rem;
  line-height: 1.85;
  padding: 0 var(--s2);
  @include max-screen($about_bp) {
    font-size: 1.3rem;
    padding: 0;
    br {
      display: none;
    }
  }
}

.about__sns {
  margin: 0 0 45px;
}

.about__img {
  border-radius: 100px;
  width: 210px;
  height: 210px;
  overflow: hidden;
  margin: 0 auto var(--s10);

  img {
    max-width: inherit;
  }
}

.about__title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: var(--s7);
  margin-bottom: var(--s6);
  border-left: 3px solid #000;
  border-bottom: 1px dotted #000;
  padding: 0 0 var(--s1) var(--s2);
  &:first-of-type {
    margin-top: 0;
  }
}

.about__history {
  padding: 0 var(--s2);
  font-size: 1.5rem;
  li:not(:last-of-type) {
    margin-bottom: var(--s1);
  }
  dl {
    display: flex;
  }
  dt {
    position: relative;
    width: 180px;
    margin: 0 var(--s7) 0 0;
    display: flex;
    &:after {
      content: '.....';
      display: block;
      position: absolute;
      transform: translateY(-5px);
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
  dd {
    flex: 1;
  }
  @include max-screen($about_bp) {
    font-size: 1.4rem;
    padding: 0;
    li:not(:last-of-type) {
      margin-bottom: var(--s3);
    }
    dl {
      display: block;
    }
    dt {
      width: auto;
      margin: 0 0 var(--s1);
      font-weight: bold;
      &:after {
        display: none;
      }
    }
  }
}
.about__list {
  font-size: 1.5rem;
  padding: 0 var(--s2);
  li:not(:last-of-type) {
    margin-bottom: var(--s2);
  }
  dl {
    display: flex;
  }
  dt {
    position: relative;
    width: 180px;
    margin: 0 var(--s7) 0 0;
    font-weight: bold;
    &:after {
      content: '.....';
      display: block;
      position: absolute;
      transform: translateY(-5px);
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
  dd {
    flex: 1;
  }
  @include max-screen($about_bp) {
    padding: 0;
    font-size: 1.4rem;
    li:not(:last-of-type) {
      margin-bottom: var(--s4);
    }
    dl {
      display: block;
    }
    dt {
      width: auto;
      margin: 0 0 var(--s1);
      font-weight: bold;
      &:after {
        display: none;
      }
    }
  }
}
.about__back {
  text-align: center;
}
</style>
