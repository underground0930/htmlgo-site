import { MicroCMSListResponse } from 'microcms-js-sdk'
import { microcmsClient } from '@/libs/microcms-client'
import type { WorksCategory } from '../types'

/**
 * 作品技術を取得
 * @returns 作品技術
 */
export async function fetchWorksTechnologies() {
  return microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
    endpoint: 'works_technology',
    queries: {
      limit: 99,
    },
  })
}
