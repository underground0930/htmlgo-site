import { getApiData } from '../utils/getApiData'
// import { getQiitaFeedData } from '../utils/getQiitaFeedData'
// import { getHatenaFeedData } from '../utils/getHatenaFeedData'
// import { getNoteFeedData } from '../utils/getNoteFeedData'

export const state = () => ({
  viewType: 'tile',
  works: [],
  worksCategory: [],
  worksTechnology: [],
  feeds: [],
})

export const mutations = {
  setViewType(state, type) {
    state.viewType = type
  },
  setFeeds(state, feeds) {
    state.feeds = feeds
  },
  setWorks(state, works) {
    state.works = works
  },
  setWorksCategory(state, worksCategory) {
    state.worksCategory = worksCategory
  },
  setWorksTechnology(state, worksTechnology) {
    state.worksTechnology = worksTechnology
  },
}

export const getters = {
  getWorks: (state) => (length) => {
    const len = length === 0 ? state.works.length : length
    return state.works.slice(0, len)
  },
  getCurrentWork: (state) => (slug) => {
    return state.works.find((work) => work.slug === slug)
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $config }) {
    await getApiData('https://htmlgo.microcms.io/api/v1/works', {
      headers: { 'X-API-KEY': $config.apikey },
    })
      .then((result) => {
        commit('setWorks', result.data.contents)
      })
      .catch((err) => {
        console.log('microcms api: ' + err)
      })
    await getApiData('https://htmlgo.microcms.io/api/v1/works_category', {
      headers: { 'X-API-KEY': $config.apikey },
    })
      .then((result) => {
        commit('setWorksCategory', result.data.contents)
      })
      .catch((err) => {
        console.log('microcms api: ' + err)
      })
    await getApiData('https://htmlgo.microcms.io/api/v1/works_technology', {
      headers: { 'X-API-KEY': $config.apikey },
    })
      .then((result) => {
        commit('setWorksTechnology', result.data.contents)
      })
      .catch((err) => {
        console.log('microcms api: ' + err)
      })

    // await Promise.allSettled([
    //   getNoteFeedData(),
    //   getHatenaFeedData(),
    //   getQiitaFeedData(),
    // ]).then((results) => {
    //   const feeds = results
    //     .reduce((prev, next) => {
    //       return prev.concat(next.value)
    //     }, [])
    //     .sort((a, b) => {
    //       return a.published < b.published ? 1 : -1
    //     })
    //   commit('setFeeds', feeds)
    // })
  },
}
