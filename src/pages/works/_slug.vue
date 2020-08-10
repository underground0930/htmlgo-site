<template lang="pug">
  div(class="container")
    main(class="main")
      common-title
        span {{detail.title}}
        span WORKS NAME
      article(class="worksDetail")
        div(class="worksDetail__kv")
          div(class="worksDetail__kvInner")
            div(class="worksDetail__slider").
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item,index) in detail.slider" :key="index">
                    <img :src="item.img.url">
                  </div>
                </div>
              </div>
          div(class="worksDetail__sliderPagenation swiper-pagination")
          font-awesome-icon(class="worksDetail__sliderBtn worksDetail__sliderBtn--prev" :icon="['fas', 'arrow-circle-left']" title="前へ" )
          font-awesome-icon(class="worksDetail__sliderBtn worksDetail__sliderBtn--next" :icon="['fas', 'arrow-circle-right']" title="次へ" )
        div(class="worksDetail__body" v-html="detail.body")
        div(class="worksDetail__info")
          div(class="worksDetail__infoBody")
            ul(class="worksDetail__infoList")

              li(class="worksDetail__infoListChild")
                dl
                  dt 公開日
                  dd
                    time(:datetime="detail.date | showPubDate") {{detail.date | showPubDate}}

              li(class="worksDetail__infoListChild")
                dl
                  dt カテゴリー
                  dd
                    span(v-for="category in detail.category" :key="category.category_label") {{category.category_label}}

              li(class="worksDetail__infoListChild")
                dl
                  dt テクノロジー
                  dd
                    span(v-for="technology in detail.technology" :key="technology.technology_label") {{technology.technology_label}}

              li(class="worksDetail__infoListChild" v-if="detail.production_period")
                dl
                  dt 制作期間
                  dd {{detail.production_period}}

              li(class="worksDetail__infoListChild" v-if="detail.url")
                dl
                  dt URL
                  dd
                    a(class="worksDetail__link" :href="detail.url" target="_blank")
                      span {{detail.url}}
                      font-awesome-icon(:icon="['fas', 'external-link-alt']" title="外部リンク" )
                    a(v-if="detail.url2" class="worksDetail__link" :href="detail.url2" target="_blank")
                      span {{detail.url2}}
                      font-awesome-icon(:icon="['fas', 'external-link-alt']" title="外部リンク" )

              li(class="worksDetail__infoListChild")
                dl
                  dt クレジット
                  dd
                    ul
                      li(v-for="(member,index) in detail.credit" :key="index")
                        p 【{{member.label}}】
                        p <a :href="member.link" target="_blank">{{member.value}}</a>

        ul(class="worksDetail__sns")
          li(class="worksDetail__snsChild")
            a(class="worksDetail__snsLink worksDetail__snsLink--facebook" @click.prevent="shareFacebook(detail.slug)")
              font-awesome-icon( :icon="['fab', 'facebook-f']" title="facebook" :style="{ color: '#ffffff' }")

          li(class="worksDetail__snsChild")
            a(class="worksDetail__snsLink worksDetail__snsLink--twitter" @click.prevent="shareTwitter(detail.slug)")
              font-awesome-icon(:icon="['fab', 'twitter']" title="twitter" :style="{ color: '#ffffff' }")

        div(class="worksDetail__back")
          common-icon-btn(:title="'BACK TO INDEX'" link="/works/" :blank="false" :icon="['fas', 'align-justify']" color="#fff")
          nuxt-link(v-if="next !== null" :to="{ name:'works-slug', params:{ slug:next.slug }}" class="workDetail__pager workDetail__pager--next")
            font-awesome-icon(:icon="['fas', 'chevron-left']" title="前の記事" :style="{ color: '#ffffff' }")
          nuxt-link(v-if="prev !== null"  :to="{ name:'works-slug', params:{ slug:prev.slug }}" class="workDetail__pager workDetail__pager--prev")
            font-awesome-icon(:icon="['fas', 'chevron-right']" title="次の記事" :style="{ color: '#ffffff' }")

</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import CommonTitle from '@/components/CommonTitle'
import CommonIconBtn from '@/components/CommonIconBtn'
import IconQiita from '@/components/icons/IconQiita'
import IconHatena from '@/components/icons/IconHatena'

export default {
  components: {
    Swiper,
    SwiperSlide,
    CommonTitle,
    CommonIconBtn,
    IconQiita,
    IconHatena,
  },
  directives: {
    swiper: directive,
  },
  asyncData({ params, store }) {
    const { slug } = params
    const works = store.state.works
    const currentIndex = works.findIndex((work) => {
      return work.slug === slug
    })
    let prev, next
    if (works.length === 1) {
      prev = null
      next = null
    } else if (currentIndex <= 0) {
      prev = works[currentIndex + 1]
      next = null
    } else if (currentIndex === works.length - 1) {
      prev = null
      next = works[currentIndex - 1]
    } else {
      prev = works[currentIndex + 1]
      next = works[currentIndex - 1]
    }

    return {
      slug,
      prev,
      next,
    }
  },
  data() {
    return {
      prev: null,
      next: null,
      swiperOption: {
        autoplay: {
          delay: 4000,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.worksDetail__sliderBtn--next',
          prevEl: '.worksDetail__sliderBtn--prev',
        },
      },
    }
  },
  computed: {
    detail() {
      return this.$store.getters.getCurrentWork(this.slug)
    },
    removeHtml() {
      return (html) => {
        if (!html) return ''
        return html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      }
    },
  },
  methods: {
    shareTwitter(slug) {
      window.open(
        `https://twitter.com/share?url=https://htmlgo.site/works/${slug}/`
      )
    },
    shareFacebook(slug) {
      window.open(
        `https://www.facebook.com/share.php?u=https://htmlgo.site/works/${slug}/`
      )
    },
  },
  head() {
    const { title, body, slider, slug } = this.detail
    const url = slider.length > 0 ? slider[0].img.url : false
    const values = {
      title: title + ' | WORKS | HTMLGO',
      description: this.removeHtml(body),
      url: `https://htmlgo.site/works/${slug}/`,
    }
    if (url) {
      values.img = url + '?fit=clamp&w=1200&h=630'
    }
    return this.$setMeta(values)
  },
}
</script>
<style lang="scss">
.worksDetail__sliderPagenation {
  .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    background: #000 !important;
    opacity: 0.4 !important;
    margin: 0 var(--s1) !important;
    &:only-child {
      display: none !important;
    }
  }
  .swiper-pagination-bullet-active {
    opacity: 1 !important;
  }
}
</style>
<style lang="scss" scoped>
$works_bp: 800px;
.main {
  max-width: 750px;
  margin: 0 auto var(--s20);

  @include max-screen($works_bp) {
    width: auto;
    margin: 0 var(--s5) var(--s10);
  }
}
.worksDetail__kv {
  position: relative;
  margin-bottom: var(--s10);
}
.worksDetail__kvInner {
  position: relative;
  border: 1px solid var(--borderColor);
  background: #eee;
  &:before {
    content: '';
    display: block;
    background: #eee;
    width: 100%;
    padding-top: calc(9 / 16 * 100%);
  }
}
.worksDetail__slider {
  overflow-x: hidden;
}

.worksDetail__sliderBtn {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &--prev {
    left: -55px;
  }
  &--next {
    right: -55px;
  }
  @include max-screen(930px) {
    display: none;
  }
}
.worksDetail__sliderPagenation {
  position: static;
  width: 100%;
  margin-top: var(--s5);
}

.worksDetail__info {
  padding: var(--s7) var(--s3);
  border-bottom: 1px solid #e5e5e5;
  @include max-screen($works_bp) {
    padding: var(--s7) 0;
  }
}

.worksDetail__infoListChild {
  &:not(:last-of-type) {
    margin: 0 0 var(--s4);
  }
  dl {
    display: block;
    border: 1px solid #e5e5e5;
  }
  dt {
    font-weight: bold;
    font-size: 1.6rem;
    padding: var(--s3);
    background: #e5e5e5;
  }
  dd {
    padding: var(--s3);
    flex: 1;
    font-size: 1.6rem;
    span:not(:last-of-type) {
      position: relative;
      display: inline-block;
      padding-right: var(--s4);
      &:after {
        position: absolute;
        content: '/';
        display: block;
        font-weight: bold;
        right: 4px;
        top: 0;
      }
    }
  }
  li:not(:last-of-type) {
    margin: 0 0 var(--s4);
  }
  div {
    padding: var(--s4) 0 0;
  }
  p {
    &:nth-of-type(1) {
      font-weight: bold;
      margin: 0 0 var(--s1);
    }
    font-size: 1.4rem;
  }
  a {
    word-break: break-word;
    display: block;
    &:not(:last-of-type) {
      margin-bottom: var(--s1);
    }
    svg {
      width: 10px;
      height: 10px;
      margin-left: 5px;
      vertical-align: baseline;
    }
  }
  @include max-screen($works_bp) {
    &:last-of-type {
      margin: 0 0 0;
    }
    padding: 0 0 0;
    dl {
      display: block;
    }
    dt {
      width: auto;
    }
  }
}

.worksDetail__body {
  margin: 0 auto 0;
  font-size: 1.6rem;
  line-height: 1.8;
  padding: var(--s7) var(--s10);
  border-top: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
  @include max-screen($works_bp) {
    font-size: 1.4rem;
    padding: var(--s7) var(--s5);
    br {
      display: none;
    }
  }
}

.worksDetail__slider {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  > .swiper-container {
    width: 100%;
    height: 100%;
  }
}

.swiper-button-disabled {
  display: none;
}

.worksDetail__back {
  position: relative;
  text-align: center;
}

.workDetail__pager {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 25px;
    height: 25px;
  }
  &--next {
    left: 0;
    svg {
      transform: translateX(-1px);
    }
  }
  &--prev {
    right: 0;
    svg {
      transform: translateX(1px);
    }
  }
}

.worksDetail__sns {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--borderColor);
  padding: var(--s7) 0;
  margin-bottom: var(--s7);
}

.worksDetail__snsChild {
  margin: 0 var(--s3) 0;
}

.worksDetail__snsLink {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 35px;
  cursor: pointer;
  &--facebook {
    background: #4267b2;
  }
  &--twitter {
    background: #1da1f2;
  }
  svg {
    width: 20px;
    height: 20px;
  }
}
</style>
