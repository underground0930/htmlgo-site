import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useMemo } from 'react'

import { Title } from '@/components/common/Title'
import { TextBtn } from '@/components/common/TextBtn'
import { WorksDetailInfo } from '@/components/pages/works/WorksDetailInfo'

import { WorkDetail } from '@/types'
import { conversionDate } from '@/utils'

const WorksSlider = dynamic(() => import('@/components/pages/works/WorksSlider'), {
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
      <main className='mx-20px max-w-[800px] md:mx-auto'>
        <Title title={post.title} text='WORKS NAME' />
        <article>
          <div className='relative mb-40px'>
            <div className='relative'>
              {post?.slider && <WorksSlider sliders={sliderList} />}
            </div>
          </div>
          {post.body && (
            <div
              className='cms-works-content mx-auto break-words border-y-1 border-border px-10px py-20px text-16px leading-[1.8] md:mx-25px md:py-40px'
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            ></div>
          )}
          <div className='border-b border-border py-40px'>
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
                        className="relative inline-block pr-16px after:absolute after:right-[5px] after:top-0 after:block after:font-bold after:content-['/'] last-of-type:after:hidden"
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
                        className="relative inline-block pr-16px after:absolute after:right-[5px] after:top-0 after:block after:font-bold after:content-['/'] last-of-type:after:hidden"
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
                        className='mb-15px block break-all underline last-of-type:mb-0px'
                        href={post.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {post.url}
                      </a>
                    )}
                    {post?.url2 && (
                      <a
                        className='mb-15px block break-all underline last-of-type:mb-0px'
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
                        <li key={v.value} className='mb-20px last-of-type:mb-0px'>
                          <p className='mb-2px text-14px font-bold'>{v.label}</p>
                          <p className='text-14px'>
                            {v.link ? (
                              <a
                                className='mb-15px block break-all underline last-of-type:mb-0px'
                                href={v.link}
                                target='_blank'
                                rel='noreferrer'
                              >
                                {v.value}
                              </a>
                            ) : (
                              <a className='mb-15px block break-all last-of-type:mb-0px'>
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
          <ul className='flex items-center justify-center border-b-[1px] border-border py-25px'>
            <li className='mx-6px'>
              <a
                className='inline-block h-[35px] cursor-pointer bg-[#4267b2] px-10px leading-[35px] text-base'
                href={shareFacebookUrl(post.slug)}
                target='_blank'
                rel='noreferrer'
              >
                facebook
              </a>
            </li>
            <li className='mx-6px'>
              <a
                className='inline-block h-[35px] cursor-pointer bg-[#1da1f2] px-10px leading-[35px] text-base'
                href={shareTwitterUrl(post.slug)}
                target='_blank'
                rel='noreferrer'
              >
                X
              </a>
            </li>
          </ul>
          <div className='relative mb-40px mt-40px text-center'>
            <TextBtn title='WORKS' link='/works' />
            {next && (
              <Link
                className='absolute bottom-0 left-0 top-0 m-auto flex h-[40px] w-[40px] items-center justify-center bg-[#000] text-base'
                href={`/works/${next.slug}`}
              >
                &lt;
              </Link>
            )}
            {prev && (
              <Link
                className='absolute bottom-0 right-0 top-0 m-auto flex h-[40px] w-[40px] items-center justify-center bg-[#000] text-base'
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
