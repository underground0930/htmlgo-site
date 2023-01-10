import React from 'react'

type Props = {
  data: { heading: string; text: string; link?: string }[]
}

const className = {
  list: `text-14px md:text-15px md:px-10px`,
  li: `mb-15px`,
  dl: `md:flex`,
  dt: `
    relative
    w-[180px]
    mr-25px
    font-bold
    md:after:content-['.....']
    md:after:block
    md:after:absolute
    md:after:top-0
    md:after:bottom-0
    md:after:right-0
    md:after:m-auto
    md:after:translate-y-[-5px]`,
  dd: `flex-1`,
  a: `underline decoration-1`,
}

const AboutHistoryList = ({ data }: Props) => {
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
                    <a className={className.a} href={link} target='_blank' rel='noreferrer'>
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

export default AboutHistoryList
