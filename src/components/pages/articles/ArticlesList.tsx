import { CategoryIcon } from '@/components/common/CategoryIcon'
import { ImageWrapper } from '@/components/common/ImageWrapper'

import { FeedObj } from '@/types'

type Props = {
  articles: FeedObj[]
}

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="mb-20px md:mb-40px md:flex md:flex-wrap md:justify-between md:after:block md:after:w-[23.5%] md:after:content-['']">
      {articles.map((article, i) => {
        return (
          <article
            key={article.link}
            className='mb-30px w-[100%] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.3)] md:w-[23.5%] '
          >
            <a href={article.link} target='_blank' rel='noopener noreferrer'>
              <dl>
                <dt className='relative h-[140px] border-b-1 border-border bg-main'>
                  <ImageWrapper
                    cls='object-cover'
                    src={article.img}
                    priority={i < 8 ? true : false}
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </dt>
                <dd className='p-12px'>
                  <time className='mb-5px block text-12px'>{article.published}</time>
                  <h3 className='relative mb-5px break-all text-13px font-bold leading-5'>
                    {article.title}
                  </h3>
                  <p className='block empty:hidden'>
                    <CategoryIcon text={article.category} />
                    {article.tags.map((tag, index) => (
                      <CategoryIcon text={tag} key={index} />
                    ))}
                  </p>
                </dd>
              </dl>
            </a>
          </article>
        )
      })}
    </div>
  )
}
