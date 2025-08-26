'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useMemo } from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

import { Title } from '@/components/common/title'
import { TextBtn } from '@/components/common/text-btn'
import { WorksDetailInfo } from './works-detail-info'

import { WorkDetail } from '@/types'
import { conversionDate } from '@/utils'

const WorksSlider = dynamic(() => import('./works-slider'), {
  ssr: false,
})

type Props = {
  post: WorkDetail
  prev: { slug: string } | null
  next: { slug: string } | null
}

export const WorksDetailBody: React.FC<Props> = ({ post, prev, next }) => {
  const shareTwitterUrl = (slug: string) =>
    `https://x.com/share?url=https://htmlgo.site/works/${slug}`
  const shareFacebookUrl = (slug: string) =>
    `https://www.facebook.com/share.php?u=https://htmlgo.site/works/${slug}`

  const sliderList = useMemo(() => {
    if (!post?.slider) return []
    return post?.slider?.filter((item) => item?.img?.url)
  }, [post.slider])

  return (
    <>
      <main className='mx-5 max-w-[800px] md:mx-auto'>
        <Title title={post.title} text='WORKS NAME' />
        <article>
          <div className='relative mb-10'>
            <div className='relative'>
              {post?.slider && <WorksSlider sliders={sliderList} />}
            </div>
          </div>
          {post.body && (
            <div
              className='mx-auto break-words border-y border-border px-2.5 py-5 text-base leading-[1.8] md:mx-6 md:py-10 [&>p]:mb-6 [&>p]:text-sm [&>p]:md:text-lg [&>li]:text-sm [&>li]:md:text-lg [&>a]:underline'
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            ></div>
          )}
          <div className='border-b border-border py-10'>
            <div>
              <ul>
                {post?.participationAt ? (
                  <WorksDetailInfo title='参加期間'>
                    <time dateTime={conversionDate(post.participationAt)}>
                      {post.participationAt}
                    </time>
                  </WorksDetailInfo>
                ) : (
                  <>
                    {post?.date && (
                      <WorksDetailInfo title='公開日'>
                        <time dateTime={conversionDate(post.date)}>
                          {conversionDate(post.date)}
                        </time>
                      </WorksDetailInfo>
                    )}
                  </>
                )}
                {post?.publishedAt2 && (
                  <WorksDetailInfo title='改修日'>
                    <time dateTime={conversionDate(post.date)}>
                      {conversionDate(post.publishedAt2)}
                    </time>
                  </WorksDetailInfo>
                )}
                {post?.category?.length > 0 && (
                  <WorksDetailInfo title='カテゴリー'>
                    {post.category.map((v) => (
                      <span
                          className="relative inline-block pr-4 after:absolute after:right-[5px] after:top-0 after:block after:font-bold after:content-['/'] last-of-type:after:hidden"
                          key={v.category_label}
                        >
                          {v.category_label}
                        </span>
                    ))}
                  </WorksDetailInfo>
                )}
                {post?.technology?.length > 0 && (
                  <WorksDetailInfo title='テクノロジー'>
                    {post.technology.map((v) => (
                        <span
                          className="relative inline-block pr-4 after:absolute after:right-1.25 after:top-0 after:block after:font-bold after:content-['/'] last-of-type:after:hidden"
                          key={v.technology_label}
                        >
                          {v.technology_label}
                        </span>
                    ))}
                  </WorksDetailInfo>
                )}
                {post?.production_period && (
                  <WorksDetailInfo title='制作期間'>
                    {post.production_period}
                  </WorksDetailInfo>
                )}
                {(post?.url || post?.url2) && (
                  <WorksDetailInfo title='URL'>
                    {post?.url && (
                        <a
                          className='mb-4 block break-all underline last-of-type:mb-0'
                          href={post.url}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {post.url}
                        </a>
                      )}
                      {post?.url2 && (
                        <a
                          className='mb-4 block break-all underline last-of-type:mb-0'
                          href={post.url2}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {post.url2}
                        </a>
                    )}
                  </WorksDetailInfo>
                )}
                {post?.credit?.length > 0 && (
                  <WorksDetailInfo title='クレジット'>
                    <ul>
                      {post.credit.map((v) => (
                        <li key={v.value} className='mb-5 last-of-type:mb-0'>
                          <p className='mb-0.5 text-sm font-bold'>{v.label}</p>
                          <p className='text-sm'>
                            {v.link ? (
                              <a
                                className='mb-4 block break-all underline last-of-type:mb-0'
                                href={v.link}
                                target='_blank'
                                rel='noreferrer'
                              >
                                {v.value}
                              </a>
                            ) : (
                              <a className='mb-4 block break-all last-of-type:mb-0'>
                                {v.value}
                              </a>
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </WorksDetailInfo>
                )}
              </ul>
            </div>
          </div>
          <ul className='flex items-center justify-center gap-5 border-b border-border py-6'>
            <li className='text-[0px]'>
              <a
                className='inline-block h-[35px] cursor-pointer'
                href={shareFacebookUrl(post.slug)}
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebookSquare className='h-full w-full' color='#4267b2' />
              </a>
            </li>
            <li className='text-[0px]'>
              <a
                className='inline-block h-[35px] cursor-pointer'
                href={shareTwitterUrl(post.slug)}
                target='_blank'
                rel='noreferrer'
              >
                <FaSquareXTwitter className='h-full w-full' />
              </a>
            </li>
          </ul>
          <div className='relative mb-10 mt-10 text-center'>
            <TextBtn title='WORKS' link='/works' />
            {next && (
              <Link
                className='absolute bottom-0 left-0 top-0 m-auto flex h-10 w-10 items-center justify-center bg-black text-base'
                href={`/works/${next.slug}`}
              >
                &lt;
              </Link>
            )}
            {prev && (
              <Link
                className='absolute bottom-0 right-0 top-0 m-auto flex h-10 w-10 items-center justify-center bg-black text-base'
                href={`/works/${prev.slug}`}
              >
                &gt;
              </Link>
            )}
          </div>
        </article>
      </main>
    </>
  )
}
