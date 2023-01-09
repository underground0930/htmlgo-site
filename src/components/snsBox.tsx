'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// libs
import { event } from 'libs/gtag'

// components
import IconQiita from '../svgs/IconQiita.svg'
import IconZenn from '../svgs/IconZenn.svg'
import IconNote from '../svgs/IconNote.svg'

type Props = {
  category: string
}

const className = {
  snsBox: `mx-auto max-w-[240px] md:max-w-[260px] flex items-center justify-center flex-wrap`,
  snsBoxChild: `mb-10px w-[20%] text-center last-of-type:mr-0px`,
  github: `w-[40px] h-[40px]`,
  twitter: `w-[40px] h-[40px]`,
  qiita: `w-[40px] h-[40px]`,
  zenn: `w-[40px] h-[40px] rounded-[4px]`,
  note: `w-[40px] h-[40px] rounded-[4px]`,
}

const SnsBox = ({ category }: Props) => {
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category, label, value })
  }

  return (
    <>
      <ul className={className.snsBox}>
        <li className={className.snsBoxChild}>
          <a
            href='https://github.com/underground0930'
            target='_blank'
            rel='noreferrer'
            onClick={(e) => clickHandler('github', e.currentTarget.href)}
          >
            <FontAwesomeIcon className={className.github} icon={faGithubSquare} color='#24292e' />
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            href='https://twitter.com/resistance_gowy'
            target='_blank'
            rel='noreferrer'
            onClick={(e) => clickHandler('twitter', e.currentTarget.href)}
          >
            <FontAwesomeIcon className={className.twitter} icon={faTwitterSquare} color='#1DA1F2' />
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            href='http://qiita.com/resistance_gowy'
            target='_blank'
            rel='noreferrer'
            onClick={(e) => clickHandler('qiita', e.currentTarget.href)}
          >
            <IconQiita className={className.qiita} />
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            href='https://zenn.dev/resistance_gowy'
            target='_blank'
            rel='noreferrer'
            onClick={(e) => clickHandler('zenn', e.currentTarget.href)}
          >
            <IconZenn className={className.zenn} />
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            href='https://note.com/resistance_gowy'
            target='_blank'
            rel='noreferrer'
            onClick={(e) => clickHandler('note', e.currentTarget.href)}
          >
            <IconNote className={className.note} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SnsBox
