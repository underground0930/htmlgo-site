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
  main: ``,
  kv: `relative mb-40px`,
  kvInner: `relative`,
  article: ``,
  info: ``,
  infoBody: ``,
  infoList: ``,
  body: ``,
  facebook: ``,
  twitter: ``,
  sns: ``,
  snsChild: ``,
  prev: ``,
  next: ``,
  back: ``,
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
              className={className.body}
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            ></div>
          )}
          <div className={className.info}>
            <div className={className.infoBody}>
              <ul className={className.infoList}>
                {post?.date && (
                  <li>
                    <dl>
                      <dt>公開日</dt>
                      <dd>
                        <time dateTime={conversionDate(post.date)}>{conversionDate(post.date)}</time>
                      </dd>
                    </dl>
                  </li>
                )}
                {post?.category?.length > 0 && (
                  <li>
                    <dl>
                      <dt>カテゴリー</dt>
                      <dd>
                        {post.category.map((v) => (
                          <span key={v.category_label}>{v.category_label}</span>
                        ))}
                      </dd>
                    </dl>
                  </li>
                )}
                {post?.technology?.length > 0 && (
                  <li>
                    <dl>
                      <dt>テクノロジー</dt>
                      <dd>
                        {post.technology.map((v) => (
                          <span key={v.technology_label}>{v.technology_label}</span>
                        ))}
                      </dd>
                    </dl>
                  </li>
                )}
                {post?.production_period && (
                  <li>
                    <dl>
                      <dt>制作期間</dt>
                      <dd>{post.production_period}</dd>
                    </dl>
                  </li>
                )}
                {(post?.url || post?.url2) && (
                  <li>
                    <dl>
                      <dt>URL</dt>
                      <dd>
                        {post?.url && (
                          <a href={post.url} target="_blank" rel="noreferrer">
                            <span>{post.url}</span>
                          </a>
                        )}
                        {post?.url2 && (
                          <a href={post.url2} target="_blank" rel="noreferrer">
                            <span>{post.url2}</span>
                          </a>
                        )}
                      </dd>
                    </dl>
                  </li>
                )}
                {post?.credit?.length > 0 && (
                  <li>
                    <dl>
                      <dt>クレジット</dt>
                      <dd>
                        <ul>
                          {post.credit.map((v) => (
                            <li key={v.value}>
                              <p>{v.label}</p>
                              <p>
                                {v.link ? (
                                  <a href={v.link} target="_blank" rel="noreferrer">
                                    {v.value}
                                  </a>
                                ) : (
                                  <a>{v.value}</a>
                                )}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </dl>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <ul className={className.sns}>
            <li className={className.snsChild}>
              <a
                className={className.facebook}
                href={shareFacebookUrl(post.slug)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  clickHandler('facebook', `/works/${post.slug}`)
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} color="#ffffff" />
              </a>
            </li>
            <li className={className.snsChild}>
              <a
                className={className.twitter}
                href={shareTwitterUrl(post.slug)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  clickHandler('twitter', `/works/${post.slug}`)
                }}
              >
                <FontAwesomeIcon icon={faTwitter} color="#ffffff" />
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
              <Link href={`/works/${next.slug}/`}>
                <a
                  className={className.next}
                  onClick={() => {
                    clickHandler('next', `/works/${next.slug}`)
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} color="#ffffff" />
                </a>
              </Link>
            )}
            {prev && (
              <Link href={`/works/${prev.slug}`}>
                <a
                  className={className.prev}
                  onClick={() => {
                    clickHandler('prev', `/works/${prev.slug}`)
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} color="#ffffff" />
                </a>
              </Link>
            )}
          </div>
        </article>
      </main>
    </Layout>
  )
}
