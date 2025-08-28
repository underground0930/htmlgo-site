import React from 'react'
import { ArticlesBody } from './articles-body'
import { fetchArticles } from '../libs/fetch-articles'

type Props = {
  params?: { page: string }
}

export const ArticlesPageComponent = async ({ params }: Props) => {
  const pageParams = params || { page: '1' }
  const result = await fetchArticles({ params: pageParams })

  return (
    <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
  )
}
