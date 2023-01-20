import { fetchArticles } from '@/libs/fetchArticles'

import ArticlesBody from '@/components/pages/articles/articlesBody'

export default async function Articles() {
  const result = await fetchArticles({ params: { page: '1' } })
  return <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
}
