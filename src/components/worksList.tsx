'use client'

import Link from 'next/link'
import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// type
import { WorksPosts } from 'types/index'

// modules
import { conversionDate } from 'utils/conversionDate'

// libs
import { event } from 'libs/gtag'

type Props = {
  works: WorksPosts
}

const WorksList = ({ works = [] }: Props) => {
  return (
    <>
      <ul className='md:flex md:flex-wrap md:justify-between'>
        {works.map((work, i) => (
          <li key={work.id} className='mb-30px border-1 border-border md:w-[32%]'>
            <Link
              className='block'
              onClick={() => {
                event({
                  action: 'click',
                  category: 'works',
                  label: work.title,
                  value: `/works/${work.slug}`,
                })
              }}
              href={`/works/${work.slug}`}
            >
              <dl>
                <dt className='relative mb-10px aspect-[16/9] border-b-1 border-border'>
                  {work.slider[0]?.img?.url && (
                    <Image
                      src={work.slider[0].img.url + '?w=800'}
                      alt=''
                      fill={true}
                      priority={i < 6 ? true : false}
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  )}
                </dt>
                <dd className='px-15px pb-10px'>
                  <time className='mb-5px block'>{conversionDate(work.date)}</time>
                  <h3 className='mb-10px break-all text-16px font-bold leading-5'>{work.title}</h3>
                  <p>
                    {work.category.map((c) => (
                      <CategoryIcon key={c.id} text={c.category_label} />
                    ))}
                    {work.technology.map((t) => (
                      <CategoryIcon key={t.id} text={t.technology_label} />
                    ))}
                  </p>
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default WorksList
