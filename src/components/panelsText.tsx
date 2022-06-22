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
    <div className={styles.panelsText}>
      {articles.map((article) => {
        return (
          <article key={article.link}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl>
                <dt>
                  <time>{article.published}</time>
                </dt>
                <dd>
                  <h3>{article.title}</h3>
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
