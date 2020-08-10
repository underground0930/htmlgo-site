<template lang="pug">
  ul(class="worksList")
    li(class="worksList__child" v-for="item in works" :key="item.id")
      nuxt-link(class="worksList__link" :to="{ name: 'works-slug', params: { slug: item.slug }}")
        dl
          dt
            img(:src="item.slider[0].img.url + '?w=800'" @load="loadImg")
          dd
            time(:datetime="item.date | showPubDate") {{item.date | showPubDate}}
            h3 {{item.title}}
            p
              span(v-for="category in item.category" :key="category.category_label") {{category.category_label}}
              span(v-for="technology in item.technology" :key="technology.technology_label") {{technology.technology_label}}
</template>

<script>
import WorksList from '@/components/WorksList'
export default {
  name: 'WorksList',
  components: {
    WorksList,
  },
  props: {
    worksLength: {
      type: Number,
      default: 0,
    },
    currentCategory: {
      type: String,
      default: '',
    },
    currentTechnology: {
      type: String,
      default: '',
    },
  },
  computed: {
    works() {
      return this.$store.getters.getWorks(this.worksLength).filter((v) => {
        const categoryFlag =
          this.currentCategory === '' ||
          v.category
            .map((cateChild) => cateChild.category_slug)
            .includes(this.currentCategory)
        const technologyFlag =
          this.currentTechnology === '' ||
          v.technology
            .map((techChild) => techChild.technology_slug)
            .includes(this.currentTechnology)
        return categoryFlag && technologyFlag
      })
    },
  },
  methods: {
    loadImg(e) {
      e.currentTarget.classList.add('is-load')
    },
  },
}
</script>

<style lang="scss" scoped>
$works_bp: 700px;

.worksList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &:after {
    content: '';
    display: block;
    width: 31%;
    height: 0;
  }
  @include max-screen($works_bp) {
    &:after {
      display: none;
    }
  }
}

.worksList__child {
  width: 31%;
  border: 1px solid #ddd;
  margin-bottom: var(--s7);
  @include max-screen($works_bp) {
    width: 100%;
    margin-bottom: var(--s5);
  }
}
.worksList__link {
  text-decoration: none;
  display: block;
  dt {
    position: relative;
    margin: 0 0 10px;
    &:before {
      content: '';
      display: block;
      background: #eee;
      width: 100%;
      padding-top: calc(9 / 16 * 100%);
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.3s;
      &.is-load {
        opacity: 1;
      }
    }
  }
  dd {
    font-size: 1.5rem;
    padding: 0 15px 10px;
  }
  time {
    display: block;
    margin: 0 0 5px;
  }
  p {
    font-size: 1.1rem;
    span {
      display: inline-block;
      padding: 2px 6px;
      background: #222;
      border-radius: 3px;
      color: #fff;
      margin-right: 3px;
      margin-bottom: 3px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    display: block;
    font-weight: bold;
    line-height: 1.5;
  }
}
</style>
