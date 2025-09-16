/**
 * 作品データ取得API
 * MicroCMSから作品データを取得し、ページネーション処理を行います
 */

import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs/microcms-client'

import type { WorkIndex } from '../types'

/**
 * トップページ用の最新作品を取得
 * @param limit 取得件数
 * @returns 最新作品一覧
 */
export async function fetchWorksList({
  page = 1,
  limit,
}: {
  page: number
  limit: number
}): Promise<{
  works: WorkIndex[]
  page: number
  pages: number
}> {
  const currentPage = page ? Number(page) : 1
  const offset = (currentPage - 1) * limit

  const result = await microcmsClient.get<MicroCMSListResponse<WorkIndex>>({
    endpoint: 'works',
    queries: {
      offset,
      limit,
      fields: 'id,title,slug,date,publishedAt2,participationAt,category,technology,slider',
    },
  })

  return {
    works: result.contents,
    page: currentPage,
    pages: Math.ceil(result.totalCount / limit),
  }
}
