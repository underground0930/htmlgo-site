////////////////////////////////////////////////////////////////////////////////////////////////////
// works List
////////////////////////////////////////////////////////////////////////////////////////////////////
import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs/microcms-client'
import { WORKS_PER_PAGE, CATEGORY_RIMIT } from '@/constants/microcms'

import type { WorkIndex, WorksCategory } from '@/types/microcms'

/**
 * Works一覧データを取得
 * @param params パラメータ
 * @param params.page ページ番号（デフォルト: 1）
 * @returns Works一覧とカテゴリ、技術情報
 */
export async function fetchWorksIndex({ params }: { params?: { page?: string } } = {}) {
  const page = params?.page ? Number(params.page) : 1
  const offset = (page - 1) * WORKS_PER_PAGE

  const result = await Promise.allSettled([
    microcmsClient.get<MicroCMSListResponse<WorkIndex>>({
      endpoint: 'works',
      queries: {
        limit: WORKS_PER_PAGE,
        offset,
        fields:
          'id,title,slug,date,publishedAt2,participationAt,category,technology,slider',
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
