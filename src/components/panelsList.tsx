import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// types
import { FeedObj } from 'types/index'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

const PanelsList = ({ articles, clickHandler }: Props) => {
  return (
    <div className='mb-20px md:mb-40px'>
      {articles.map((article, i) => {
        return (
          <article
            key={article.link}
            className='border-b-1 border-border py-20px first-of-type:border-t-1'
          >
            <a
              href={article.link}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl className='flex items-center bg-base'>
                <dt className='relative h-[70px] w-[70px] border-1 border-border md:h-[100px] md:w-[100px]'>
                  <Image
                    src={article.img}
                    alt={''}
                    fill={true}
                    className='object-cover'
                    priority={i < 4 ? true : false}
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </dt>
                <dd className='flex-1 pl-20px'>
                  <time className='mb-4px block text-14px'>{article.published}</time>
                  <h3 className='mb-4px text-15px font-bold'>{article.title}</h3>
                  <p>
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

export default PanelsList
