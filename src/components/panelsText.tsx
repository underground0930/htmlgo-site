// components
import CategoryIcon from './categoryIcon'

// types
import { FeedObj } from 'types/index'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

const PanelsText = ({ articles, clickHandler }: Props) => {
  return (
    <div className='mb-20px md:mb-40px'>
      {articles.map((article) => {
        return (
          <article
            key={article.link}
            className='border-b-1 border-border py-20px first-of-type:border-t-1'
          >
            <a
              href={article.link}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl className='flex items-center'>
                <dt className='w-100px pr-15px'>
                  <time className='mb-4px block text-14px'>{article.published}</time>
                </dt>
                <dd className='flex-1'>
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

export default PanelsText
