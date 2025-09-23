import { MicroCMSListResponse } from 'microcms-js-sdk'
import { microcmsClient } from '@/libs/microcms-client'
import type { WorksCategory } from '../types'

/**
 * 作品カテゴリを取得
 * @returns 作品カテゴリ
 */
export async function fetchWorksCategories() {
  return microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
    endpoint: 'works_category',
    queries: {
      limit: 99,
    },
  })
}
