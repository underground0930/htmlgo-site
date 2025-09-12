/**
 * 作品データ取得API
 * MicroCMSから作品データを取得し、ページネーション処理を行います
 */

import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs/microcms-client'

import type { WorkIndex, WorksCategory } from '../types'

/**
 * Works一覧データを取得
 * @param params パラメータ
 * @param params.page ページ番号（デフォルト: 1）
 * @returns Works一覧とカテゴリ、技術情報
 */
export async function fetchWorksIndex({ params }: { params?: { page?: string } } = {}) {
  const WORKS_PER_PAGE = 12
  const CATEGORY_RIMIT = 20
  const page = params?.page ? Number(params.page) : 1
  const offset = (page - 1) * WORKS_PER_PAGE

  const result = await Promise.allSettled([
    microcmsClient.get<MicroCMSListResponse<WorkIndex>>({
      endpoint: 'works',
      queries: {
        limit: WORKS_PER_PAGE,
        offset,
        fields: 'id,title,slug,date,publishedAt2,participationAt,category,technology,slider',
      },
    }),
    microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
      endpoint: 'works_category',
      queries: { limit: CATEGORY_RIMIT },
    }),
    microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
      endpoint: 'works_technology',
      queries: { limit: CATEGORY_RIMIT },
    }),
  ]).then((results) => {
    const resultsVal = results.map((result) => {
      if (result.status === 'fulfilled') {
        return result.value
      }
      return { contents: [], totalCount: 0 }
    })

    const worksResult = resultsVal[0] as MicroCMSListResponse<WorkIndex>

    return {
      works: worksResult.contents,
      totalCount: worksResult.totalCount,
      page,
      pages: Math.ceil(worksResult.totalCount / WORKS_PER_PAGE),
      categories: resultsVal[1].contents as WorksCategory[],
      technologies: resultsVal[2].contents as WorksCategory[],
    }
  })

  return result
}

/**
 * トップページ用の最新作品を取得
 * @param limit 取得件数（デフォルト: 4）
 * @returns 最新作品一覧
 */
export async function fetchLatestWorks(limit = 4): Promise<WorkIndex[]> {
  const result = await microcmsClient.get<MicroCMSListResponse<WorkIndex>>({
    endpoint: 'works',
    queries: {
      limit,
      fields: 'id,title,slug,date,publishedAt2,participationAt,category,technology,slider',
    },
  })

  return result.contents
}
