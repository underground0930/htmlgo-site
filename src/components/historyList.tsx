import React from 'react'

// styles
import styles from 'styles/components/HistoryList.module.scss'

type Props = {
  data: { heading: string; text: string; link?: string }[]
}

const className = {
  list: `text-14px md:text-15px md:px-10px`,
  li: ``,
  dl: `flex`,
  dt: `
    relative
    w-[180px]
    mr-25px
    font-bold
    after:content-['.....']
    after:block
    after:absolute
    after:top-0
    after:bottom-0
    after:right-0
    after:m-auto
    after:translate-y-[-5px]`,
  dd: `flex-1`,
}

const HistoryList = ({ data }: Props) => {
  return (
    <>
      <ul className={className.list}>
        {data.map((child, index) => {
          const { heading, text, link } = child
          return (
            <li className={className.li} key={index}>
              <dl className={className.dl}>
                <dt className={className.dt}>{heading}</dt>
                <dd className={className.dd}>
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
