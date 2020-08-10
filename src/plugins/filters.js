import Vue from 'vue'

Vue.mixin({
  filters: {
    showPubDate(d) {
      return d.replace(/(\d{4}-\d{2})(.*)/, '$1')
    },
  },
})
