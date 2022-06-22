// components
import CategoryIcon from './categoryIcon'

// types
import { FeedObj } from 'types/index'

// styles
import styles from 'styles/components/PanelsText.module.scss'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

const PanelsText = ({ articles, clickHandler }: Props) => {
  return (
    <div className="mb-20px md:mb-40px">
      {articles.map((article) => {
        return (
          <article key={article.link} className="border-b border-border py-20px first-of-type:border-t">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl className="flex items-center">
                <dt className="w-100px pr-15px">
                  <time className="block text-14px mb-4px">{article.published}</time>
                </dt>
                <dd className="flex-1">
                  <h3 className="text-15px font-bold mb-4px">{article.title}</h3>
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
