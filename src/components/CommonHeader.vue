<template lang="pug">
  header(class="header")
    div(class="header__inner")
      h1(class="header__title")
        nuxt-link(class="header__titleLink" to="/") HTMLGO
      nav(class="header__nav")
        ul(class="header__lists")
          li(class="header__list")
            nuxt-link(class="header__listLink" to="/" exact) TOP
          li(class="header__list")
            nuxt-link(class="header__listLink" to="/about/") ABOUT
          li(class="header__list")
            nuxt-link(class="header__listLink" to="/works/") WORKS
          li(class="header__list")
            nuxt-link(class="header__listLink" to="/articles/") ARTICLES
          li(class="header__list")
            nuxt-link(class="header__listLink" to="/contact/") CONTACT
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      current: this.$route.name,
    }
  },
  computed: {
    checkNaVCurrent() {
      return (name) => {
        return this.$route.name === name
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$header_bp: 650px;
.header {
  background: var(--baseColor);
  margin: 0 0 var(--s12);
  border-bottom: 1px solid #ddd;
  position: relative;
  z-index: 1;
  @include max-screen($header_bp) {
    display: block;
    margin: 0 0 var(--s8);
  }
}

.header__inner {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include max-screen($header_bp) {
    display: block;
    padding: 0 0 10px;
  }
}

.header__title {
  width: 210px;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: bold;
  padding: var(--s6) 0;
  margin: 0 0 0 var(--s7);
  @include max-screen($header_bp) {
    margin: 0;
    padding: var(--s6) 0 var(--s5);
    width: 100%;
    text-align: center;
  }
  @include max-screen(600px) {
    padding: var(--s4) 0 var(--s4);
    font-size: 2rem;
  }
}

.header__nav {
  margin: 0 var(--s7) 0 0;

  @include max-screen($header_bp) {
    margin: 0 0 0;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 0 var(--s7) var(--s1);
    box-sizing: border-box;
  }
}

.header__titleLink {
  text-decoration: none;
  color: var(--linkColor);
}

.header__lists {
  display: flex;
}

.header__list {
  display: inline-block;
  margin: 0 0 0 var(--s6);
  &:nth-of-type(1) {
    margin-left: 0;
  }
  @include max-screen($header_bp) {
    &:last-of-type {
      padding-right: 30px;
    }
  }
}

.header__listLink {
  color: var(--fontColor);
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  @include min-screen($header_bp + 1px) {
    &:hover {
      color: #339fef;
    }
  }
  &.nuxt-link-active {
    color: #339fef;
  }
  @include max-screen($header_bp) {
    padding: var(--s2) 0;
    font-size: 1.4rem;
  }
}

.header__listLink.comingsoon {
  text-decoration: line-through;
}
</style>
