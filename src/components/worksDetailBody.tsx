import Link from 'next/link'
import dynamic from 'next/dynamic'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// type
import { Post } from 'types/index'

// module
import { conversionDate } from 'utils/conversionDate'
import { removeHtml } from 'utils/removeHtml'
import { cutText } from 'utils/cutText'

// libs
import { event } from 'libs/gtag'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'
import PreviewBtn from './previewBtn'
import WorksDetailInfo from './worksDetailInfo'

const WorksSlider = dynamic(() => import('components/worksSlider'), {
  ssr: false,
})

type Props = {
  post: Post
  prev: { slug: string } | null
  next: { slug: string } | null
  isPreview: boolean
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
  snsLink: `flex items-center justify-center w-[80px] h-[35px] cursor-pointer`,
  icon: `w-[25px] h-[25px]`,
  pager: `absolute top-0 bottom-0 m-auto w-[40px] h-[40px] bg-[#000] flex items-center justify-center`,
  prev: `right-0`,
  next: `left-0`,
  back: `relative text-center mt-40px mb-40px`,
}

export default function WorksDetailBody({ post, prev, next, isPreview }: Props) {
  const shareTwitterUrl = (slug: string) => {
    return `https://twitter.com/share?url=https://htmlgo.site/works/${slug}/`
  }
  const shareFacebookUrl = (slug: string) => {
    return `https://www.facebook.com/share.php?u=https://htmlgo.site/works/${slug}`
  }
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'works-detail', label, value })
  }

  return (
    <Layout>
      <HeadWrap
        title={`${post.title} | WORKS | HTMLGO`}
        description={post.body ? cutText(removeHtml(post.body), 120) : post.title + 'の実績紹介です。'}
        image={post.slider?.[0]?.img?.url}
        url={`https://htmlgo.site/works/${post.slug}/`}
        isPreview={isPreview}
      />
      {isPreview && <PreviewBtn />}
      <main className={className.main}>
        <Title title={post.title} text="WORKS NAME" />
        <article className={className.article}>
          <div className={className.kv}>
            <div className={className.kvInner}>
              {post?.slider && <WorksSlider slider={post.slider}></WorksSlider>}
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
                  <WorksDetailInfo title="公開日">
                    <time dateTime={conversionDate(post.date)}>{conversionDate(post.date)}</time>
                  </WorksDetailInfo>
                )}
                {post?.category?.length > 0 && (
                  <WorksDetailInfo title="カテゴリー">
                    {post.category.map((v) => (
                      <span className={className.span} key={v.category_label}>
                        {v.category_label}
                      </span>
                    ))}
                  </WorksDetailInfo>
                )}
                {post?.technology?.length > 0 && (
                  <WorksDetailInfo title="テクノロジー">
                    {post.technology.map((v) => (
                      <span className={className.span} key={v.technology_label}>
                        {v.technology_label}
                      </span>
                    ))}
                  </WorksDetailInfo>
                )}
                {post?.production_period && (
                  <WorksDetailInfo title="制作期間">{post.production_period}</WorksDetailInfo>
                )}
                {(post?.url || post?.url2) && (
                  <WorksDetailInfo title="URL">
                    {post?.url && (
                      <a
                        className={`${className.link} underline`}
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {post.url}
                      </a>
                    )}
                    {post?.url2 && (
                      <a
                        className={`${className.link} underline`}
                        href={post.url2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {post.url2}
                      </a>
                    )}
                  </WorksDetailInfo>
                )}
                {post?.credit?.length > 0 && (
                  <WorksDetailInfo title="クレジット">
                    <ul>
                      {post.credit.map((v) => (
                        <li key={v.value} className={'mb-20px last-of-type:mb-0px'}>
                          <p className="mb-2px text-14px font-bold">{v.label}</p>
                          <p className="text-14px">
                            {v.link ? (
                              <a
                                className={`${className.link} underline`}
                                href={v.link}
                                target="_blank"
                                rel="noreferrer"
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
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  clickHandler('facebook', `/works/${post.slug}`)
                }}
              >
                <FontAwesomeIcon className={className.icon} icon={faFacebookF} color="#ffffff" />
              </a>
            </li>
            <li className={className.snsChild}>
              <a
                className={`${className.snsLink} ${className.twitter}`}
                href={shareTwitterUrl(post.slug)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  clickHandler('twitter', `/works/${post.slug}`)
                }}
              >
                <FontAwesomeIcon className={className.icon} icon={faTwitter} color="#ffffff" />
              </a>
            </li>
          </ul>
          <div className={className.back}>
            <IconBtn
              icon="faAlignJustify"
              link="/works/"
              color="#ffffff"
              onClick={() => {
                clickHandler('works', `/works/`)
              }}
            />
            {next && (
              <Link
                className={`${className.pager} ${className.next}`}
                onClick={() => {
                  clickHandler('next', `/works/${next.slug}`)
                }}
                href={`/works/${next.slug}/`}
              >
                <FontAwesomeIcon className={className.icon} icon={faChevronLeft} color="#ffffff" />
              </Link>
            )}
            {prev && (
              <Link
                className={`${className.pager} ${className.prev}`}
                onClick={() => {
                  clickHandler('prev', `/works/${prev.slug}`)
                }}
                href={`/works/${prev.slug}`}
              >
                <FontAwesomeIcon className={className.icon} icon={faChevronRight} color="#ffffff" />
              </Link>
            )}
          </div>
        </article>
      </main>
    </Layout>
  )
}
