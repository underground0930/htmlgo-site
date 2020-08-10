import Vue from 'vue'
Vue.prototype.$setMeta = ({ topFlag, title, description, url, img }) => {
  return {
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:url', property: 'og:url', content: url },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: img,
        __dangerouslyDisableSanitizersByTagID: {
          description: ['content'],
        },
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: topFlag ? 'website' : 'article',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: img,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'og:image': ['content'],
      'twitter:image': ['content'],
    },
    link: [{ hid: 'canonical', rel: 'canonical', href: url }],
  }
}
