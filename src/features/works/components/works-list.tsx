/**
 * 作品一覧表示コンポーネント
 * MicroCMSから取得した作品データを表示します
 */

'use client'

import Link from 'next/link'

import { CategoryIcon } from '@/components/ui/category-icon'
import { Image } from '@/components/utils/image'
import { conversionDate } from '@/utils/conversion-date'
import type { WorkIndex } from '../types'
import { NO_IMAGE } from '../constants'

type Props = {
  works: WorkIndex[]
}

export const WorksList = ({ works = [] }: Props) => {
  return (
    <>
      <ul className='mb-5 md:mb-10 md:grid md:grid-cols-4 md:gap-3'>
        {works.map((work) => {
          const thumbnail = work?.slider?.[0]?.img?.url ?? NO_IMAGE
          return (
            <li key={work.id} className='border-border mb-5 border md:mb-0'>
              <Link className='block h-full' href={`/works/${work.slug}`} prefetch={false}>
                <dl>
                  <dt className='border-border relative aspect-video border-b'>
                    <Image cover src={thumbnail} />
                  </dt>
                  <dd className='p-3'>
                    {work.participationAt ? (
                      <time className='mb-2 block text-xs'>参加期間:{work.participationAt}</time>
                    ) : (
                      <>
                        {work.date && (
                          <time className='block text-xs'>公開日:{conversionDate(work.date)}</time>
                        )}
                      </>
                    )}
                    {work.publishedAt2 && (
                      <time className='mb-2 block text-xs'>
                        改修日:{conversionDate(work.publishedAt2)}
                      </time>
                    )}
                    <h3 className='mt-2.5 mb-2.5 text-base leading-5 font-bold break-all'>
                      {work.title}
                    </h3>
                    <p>
                      {work.category.map((c) => (
                        <CategoryIcon key={c.category_slug} text={c.category_label} />
                      ))}
                      {work.technology.map((t) => (
                        <CategoryIcon key={t.technology_slug} text={t.technology_label} />
                      ))}
                    </p>
                  </dd>
                </dl>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
