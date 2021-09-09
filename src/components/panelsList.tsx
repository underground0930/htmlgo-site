// types
import { FeedObj } from 'types/index'

// styles
import styles from 'styles/components/PanelsList.module.scss'

type Props = {
  articles: FeedObj[]
}

const PanelsList = ({ articles }: Props) => {
  return (
    <div className={styles.panelsList}>
      {articles.map((article) => {
        return (
          <article key={article.link}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <dl>
                <dt
                  style={{
                    backgroundImage: `url(${article.img})`,
                  }}
                ></dt>
                <dd>
                  <time>{article.published}</time>
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

export default PanelsList
