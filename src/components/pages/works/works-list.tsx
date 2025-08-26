'use client'

import Link from 'next/link'

import { CategoryIcon } from '@/components/common/category-icon'
import { ImageWrapper } from '@/components/common/image-wrapper'

import { conversionDate } from '@/utils'
import { WorkIndex } from '@/types'
import { NO_IMAGE } from '@/const'

type Props = {
  works: WorkIndex[]
}

export const WorksList: React.FC<Props> = ({ works = [] }) => {
  return (
    <>
      <ul className='mb-5 md:mb-10 md:grid md:grid-cols-3 md:gap-6'>
        {works.map((work, i) => {
          const thumb = work?.slider?.[0]?.img?.url
          const thumbnail = thumb ? thumb + '?w=800' : NO_IMAGE
          return (
            <li key={work.id} className='mb-5 border border-border md:mb-0'>
              <Link className='block' href={`/works/${work.slug}`} prefetch={false}>
                <dl>
                  <dt className='relative mb-2.5 aspect-video border-b border-border'>
                    <ImageWrapper
                      cls='object-cover '
                      src={thumbnail}
                      priority={i < 6}
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </dt>
                  <dd className='px-4 pb-4'>
                    {work.participationAt ? (
                      <time className='mb-2 block text-xs'>
                        参加期間:{work.participationAt}
                      </time>
                    ) : (
                      <>
                        {work.date && (
                          <time className='block text-xs'>
                            公開日:{conversionDate(work.date)}
                          </time>
                        )}
                      </>
                    )}
                    {work.publishedAt2 && (
                      <time className='mb-2 block text-xs'>
                        改修日:{conversionDate(work.publishedAt2)}
                      </time>
                    )}
                    <h3 className='mb-2.5 mt-2.5 break-all text-base font-bold leading-5'>
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
