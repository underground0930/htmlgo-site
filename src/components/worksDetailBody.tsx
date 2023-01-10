import Link from 'next/link'
import dynamic from 'next/dynamic'

// type
import { Post } from '@/types/microcms'

// utils
import { conversionDate } from '@/utils/conversionDate'

// components
import Title from '@/components/title'
import TextBtn from '@/components/textBtn'
import WorksDetailInfo from '@/components/worksDetailInfo'

const WorksSlider = dynamic(() => import('@/components/worksSlider'), {
  ssr: false,
})

type Props = {
  post: Post
  prev: { slug: string } | null
  next: { slug: string } | null
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  kv: `relative mb-40px`,
  kvInner: `relative`,
  article: ``,
  info: `py-40px border-b border-border`,
  infoBody: ``,
  infoList: ``,
  link: `break-all block mb-15px last-of-type:mb-0px`,
  span: `relative inline-block pr-16px after:absolute after:content-["/"] after:block last-of-type:after:hidden after:font-bold after:right-[5px] after:top-0`,
  body: `mx-auto text-16px leading-[1.8] px-10px py-20px border-y-1 border-border break-words md:mx-25px md:py-40px`,
  facebook: `bg-[#4267b2]`,
  twitter: `bg-[#1da1f2]`,
  sns: `py-25px flex items-center justify-center border-b-[1px] border-border`,
  snsChild: `mx-6px`,
  snsLink: `inline-block leading-[35px] h-[35px] px-10px cursor-pointer text-base`,
  icon: `w-[25px] h-[25px]`,
  pager: `absolute top-0 bottom-0 m-auto w-[40px] h-[40px] bg-[#000] text-base flex items-center justify-center`,
  prev: `right-0`,
  next: `left-0`,
  back: `relative text-center mt-40px mb-40px`,
}

export default function WorksDetailBody({ post, prev, next }: Props) {
  const shareTwitterUrl = (slug: string) => {
    return `https://twitter.com/share?url=https://htmlgo.site/works/${slug}/`
  }
  const shareFacebookUrl = (slug: string) => {
    return `https://www.facebook.com/share.php?u=https://htmlgo.site/works/${slug}`
  }

  return (
    <>
      <main className={className.main}>
        <Title title={post.title} text='WORKS NAME' />
        <article className={className.article}>
          <div className={className.kv}>
            <div className={className.kvInner}>
              {post?.slider && <WorksSlider sliders={post.slider}></WorksSlider>}
            </div>
          </div>
          {post.body && (
            <div
              className={`${className.body} workDetailBody`}
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            ></div>
          )}
          <div className={className.info}>
            <div className={className.infoBody}>
              <ul className={className.infoList}>
                {post?.date && (
                  <WorksDetailInfo title='公開日'>
                    <time dateTime={conversionDate(post.date)}>{conversionDate(post.date)}</time>
                  </WorksDetailInfo>
                )}
                {post?.category?.length > 0 && (
                  <WorksDetailInfo title='カテゴリー'>
                    {post.category.map((v) => (
                      <span className={className.span} key={v.category_label}>
                        {v.category_label}
                      </span>
                    ))}
                  </WorksDetailInfo>
                )}
                {post?.technology?.length > 0 && (
                  <WorksDetailInfo title='テクノロジー'>
                    {post.technology.map((v) => (
                      <span className={className.span} key={v.technology_label}>
                        {v.technology_label}
                      </span>
                    ))}
                  </WorksDetailInfo>
                )}
                {post?.production_period && (
                  <WorksDetailInfo title='制作期間'>{post.production_period}</WorksDetailInfo>
                )}
                {(post?.url || post?.url2) && (
                  <WorksDetailInfo title='URL'>
                    {post?.url && (
                      <a
                        className={`${className.link} underline`}
                        href={post.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {post.url}
                      </a>
                    )}
                    {post?.url2 && (
                      <a
                        className={`${className.link} underline`}
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
                                className={`${className.link} underline`}
                                href={v.link}
                                target='_blank'
                                rel='noreferrer'
                              >
                                {v.value}
                              </a>
                            ) : (
                              <a className={className.link}>{v.value}</a>
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
          <ul className={className.sns}>
            <li className={className.snsChild}>
              <a
                className={`${className.snsLink} ${className.facebook}`}
                href={shareFacebookUrl(post.slug)}
                target='_blank'
                rel='noreferrer'
              >
                FACEBOOK
              </a>
            </li>
            <li className={className.snsChild}>
              <a
                className={`${className.snsLink} ${className.twitter}`}
                href={shareTwitterUrl(post.slug)}
                target='_blank'
                rel='noreferrer'
              >
                TWITTER
              </a>
            </li>
          </ul>
          <div className={className.back}>
            <TextBtn title='WORKS' link='/works/' />
            {next && (
              <Link
                className={`${className.pager} ${className.next}`}
                href={`/works/${next.slug}/`}
              >
                &lt;
              </Link>
            )}
            {prev && (
              <Link className={`${className.pager} ${className.prev}`} href={`/works/${prev.slug}`}>
                &gt;
              </Link>
            )}
          </div>
        </article>
      </main>
    </>
  )
}
