<template lang="pug">
  div(class="feedPanelWrap")
    view-switch
    div(class="panelsWrap")
      feed-panel-child(:items="sliceItems")
    page-nation(v-if="isPagenagtion" :base="base"  :items="items" :page="page", :unit="unit" :isPageNationBtn="isPageNationBtn" :setPage="setPage")
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

import ViewSwitch from '@/components/ViewSwitch'
import FeedPanelChild from '@/components/FeedPanelChild'
import PageNation from '@/components/PageNation'

export default {
  name: 'FeedPanelWrap',
  components: {
    ViewSwitch,
    FeedPanelChild,
    PageNation,
  },
  props: {
    base: {
      type: String,
      default: '',
    },
    isPagenagtion: {
      type: Boolean,
      default: false,
    },
    unit: {
      type: Number,
      default: 8,
    },
  },
  data() {
    return {
      items: [],
      page: 1,
      feed: {
        qiita: 0,
        hatena: 0,
      },
    }
  },
  computed: {
    ...mapState(['viewType']),
    sliceItems() {
      const index = this.page - 1
      if (index < 0 || index > this.getMaxPage) {
        return this.items
      }
      return this.items.slice(index * this.unit, (index + 1) * this.unit)
    },
    getMaxPage() {
      const allLenght = this.items.length
      const max = allLenght / this.unit
      return Math.ceil(max)
    },
    isPageNationBtn() {
      return (page) => {
        if (page < 1 || this.getMaxPage < page) {
          return false
        }
        return true
      }
    },
  },
  async created() {
    try {
      const items = await axios.get('/_nuxt/json/article.json')
      this.items = items.data
      this.checkInvalidParam()
    } catch (err) {
      console.log('article err: ' + err)
    }
  },
  methods: {
    setPage(i) {
      this.page = i
    },
    checkInvalidParam() {
      if (this.$route?.query?.page) {
        const page = Number(this.$route.query.page)
        if (isNaN(page) || page < 1 || page > this.getMaxPage) {
          this.$router.push('/')
          return
        }
        this.page = Number(page)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$feedPanelWrap_bp: 800px;
.feedPanelWrap {
  position: relative;
  margin-bottom: var(--s10);
  @include max-screen(920px) {
    margin-bottom: var(--s5);
  }
}
</style>
