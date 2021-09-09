import React from 'react'

// styles
import styles from 'styles/components/HistoryList.module.scss'

type Props = {
  data: { heading: string; text: string; link?: string }[]
}

const HistoryList = ({ data }: Props) => {
  return (
    <>
      <ul className={styles.list}>
        {data.map((child, index) => {
          const { heading, text, link } = child
          return (
            <li key={index}>
              <dl>
                <dt>{heading}</dt>
                <dd>
                  {link ? (
                    <a href={link} target="_blank" rel="noreferrer">
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </dd>
              </dl>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HistoryList
