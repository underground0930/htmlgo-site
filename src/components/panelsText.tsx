// types
import { FeedObj } from 'types/index'

// styles
import styles from 'styles/components/PanelsText.module.scss'

type Props = {
  articles: FeedObj[]
}

const PanelsText = ({ articles }: Props) => {
  return (
    <div className={styles.panelsText}>
      {articles.map((article) => {
        return (
          <article key={article.link}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <dl>
                <dt>
                  <time>{article.published}</time>
                </dt>
                <dd>
                  <h3>{article.title}</h3>
                  <p>
                    <span>{article.category}</span>
                    {article.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
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
