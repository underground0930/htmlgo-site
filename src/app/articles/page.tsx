import { setMetaData } from '@/utils/setMetadata'

import { fetchArticles } from '@/libs/fetchArticles'

import ArticlesBody from '@/components/pages/articles/articlesBody'

import { setBaseUrl } from '@/const/config'

const description = '色々なブログの記事のフィードをまとめたものです'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ARTICLES',
    description,
    url: setBaseUrl('/articles'),
    images: setBaseUrl('/img/ogp_new.png'),
  }),
}

export default async function Articles() {
  const result = await fetchArticles({ params: { page: '1' } })
  return <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
}
