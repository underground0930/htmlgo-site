import { MicroCMSListResponse } from 'microcms-js-sdk'
import { microcmsClient } from '@/libs/microcms-client'
import type { WorksCategory } from '../types'

export async function fetchWorksTechnologies() {
  return microcmsClient.get<MicroCMSListResponse<WorksCategory>>({
    endpoint: 'works_technology',
    queries: {
      limit: 20,
    },
  })
}
