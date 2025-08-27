/**
 * Articles共通ページコンポーネント
 * ページネーション有無に関わらず、Articlesページの共通レイアウトを提供
 */

import React from 'react'
import { ArticlesBody } from './articles-body'
import { fetchArticles } from '../libs/fetch-articles'

/**
 * Articles共通ページのプロパティ型定義
 */
type ArticlesPageProps = {
  /**
   * ページパラメータ（オプショナル）
   * 指定されない場合は1ページ目を表示
   */
  params?: { page: string }
}

/**
 * Articles共通ページコンポーネント
 *
 * @param params - ページパラメータ
 * @returns Articles一覧ページのJSX
 */
export async function ArticlesPageComponent({ params }: ArticlesPageProps) {
  // paramsが指定されていない場合は1ページ目を表示
  const pageParams = params || { page: '1' }
  const result = await fetchArticles({ params: pageParams })

  return (
    <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
  )
}
