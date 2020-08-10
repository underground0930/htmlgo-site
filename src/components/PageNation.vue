<template lang="pug">
  ul(class="pagination")
    li(class="pagination__prev" v-if="isPageNationBtn(page - 1)")
      nuxt-link(:to="`${base}/?page=${page - 1}`" @click.native="setPage(page - 1)")
        | &lt;
    li(class="pagination__loop" v-if="isPageNationBtn(page - 2)")
      nuxt-link(:to="`${base}/?page=${page - 2}`" @click.native="setPage(page - 2)")
        | {{page - 2}}
    li(class="pagination__loop" v-if="isPageNationBtn(page - 1)")
      nuxt-link(:to="`${base}/?page=${page - 1}`" @click.native="setPage(page - 1)")
        | {{page - 1}}
    li(class="pagination__loop pagination__loop--active")
      nuxt-link(:to="`${base}/?page=${page}`" @click.native="setPage(page)")
        | {{page}}
    li(class="pagination__loop" v-if="isPageNationBtn(page + 1)")
      nuxt-link(:to="`${base}/?page=${page + 1}`" @click.native="setPage(page + 1)")
        | {{page + 1}}
    li(class="pagination__loop" v-if="isPageNationBtn(page + 2)")
      nuxt-link(:to="`${base}/?page=${page + 2}`" @click.native="setPage(page + 2)")
        | {{page + 2}}
    li(class="pagination__next" v-if="isPageNationBtn(page + 1)")
      nuxt-link(:to="`${base}/?page=${page + 1}`" @click.native="setPage(page + 1)")
        | &gt;
</template>

<script>
export default {
  name: 'PageNation',
  props: {
    base: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: () => {},
    },
    page: {
      type: Number,
      default: 1,
    },
    isPageNationBtn: {
      type: Function,
      default: () => {},
    },
    setPage: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  border-top: var(--borderColor) 2px solid;
  border-bottom: var(--borderColor) 2px solid;
  padding: 20px 0;
  margin: var(--s10) 0;
  vertical-align: top;

  li {
    display: inline-block;
    margin: 0 6px 0;
  }

  a {
    display: block;
    background: var(--color1);
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    font-size: 1.5rem;
  }

  &__loop--active a {
    background: #ddd;
    color: var(--color1);
    font-weight: bold;
  }
}

.pagination--detail {
  overflow: hidden;
  .pagination__prev {
    float: left;
  }
  .pagination__next {
    float: right;
  }
}
</style>
