/**
 * 記事データ取得API
 * 外部フィード（feed.json）から記事データを取得し、ページネーション処理を行います
 */

import { ARTICLE_PER_PAGE } from '../constants'
import type { FeedObj } from '../types'

/**
 * Articles一覧データを取得
 * @param params パラメータ
 * @param params.page ページ番号
 * @returns Articles一覧とページ情報
 */
export async function fetchArticlesList({ page = 1 }: { page: number }) {
  // 全記事を取得
  const allArticles = ((await import('../../../../public/feed.json')) as { default: FeedObj[] })
    .default

  // ページネーション用に記事を切り出し
  const startIndex = ARTICLE_PER_PAGE * (page - 1)
  const endIndex = ARTICLE_PER_PAGE * page
  const articles = allArticles.slice(startIndex, endIndex)

  // 総ページ数を計算
  const totalPages = Math.ceil(allArticles.length / ARTICLE_PER_PAGE)

  return {
    articles,
    page,
    pages: totalPages,
    totalCount: allArticles.length,
  }
}
