import React from 'react'
import { IconType } from 'react-icons'
import { FaNodeJs, FaReact, FaNpm } from 'react-icons/fa'
import {
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiEslint,
  SiGithub,
  SiPrettier,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiWebpack,
  SiSass,
  SiWordpress,
  SiStorybook,
} from 'react-icons/si'

import { shuffle } from '@/utils'

const List = [
  FaReact,
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiEslint,
  SiGithub,
  SiPrettier,
  SiHtml5,
  SiVercel,
  SiCss3,
  SiWebpack,
  SiWordpress,
  FaNodeJs,
  SiSass,
  SiStorybook,
  FaNpm,
]

export const ServiceList: React.FC = () => {
  return (
    <>
      <div className='mb-10 ml-auto mr-auto flex max-w-[680px] flex-wrap justify-center'>
        {shuffle<IconType>(List).map((Icon, index) => (
          <Icon className='m-3 h-auto w-[50px]' key={index} />
        ))}
      </div>
      <ul className='after:block after:content-[""] md:flex md:flex-wrap md:justify-between after:md:w-[32%]'>
        <li className='mb-30px border-1 border-border md:w-[32%]'>
          <dl className='p-4'>
            <dt className='mb-4 text-center font-bold'>
              更新性、品質が高い
              <br />
              Webサイト構築
            </dt>
            <dd className='text-14px leading-7'>
              お客様側の立場に立ってプロジェクトを進めることを心がけています。
              <b>ただのエンジニアとしてではなくビジネスパートナーとして</b>
              プロジェクトが円滑に進むようにご協力させていただきます。品質にも自信があり、
              <a
                href='https://github.com/underground0930/verifier/blob/main/README.md'
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold underline'
              >
                検証機
              </a>
              も幅広く用意しておりますのでブラウザチェックも安心です。
            </dd>
          </dl>
        </li>
        <li className='mb-30px border-1 border-border md:w-[32%]'>
          <dl className='p-4'>
            <dt className='mb-4 text-center font-bold'>
              使いやすく寿命の長い
              <br />
              CMS構築
            </dt>
            <dd className='text-14px leading-7'>
              <b>WordPress</b>の豊富な開発経験があります。
              プラグインをなるべく使用せずに寿命が長く使いやすいCMS構築を得意とします。
              <b>MicroCMS、Newt</b>など、今流行りのヘッドレスCMSについてもご相談ください。
            </dd>
          </dl>
        </li>
        <li className='mb-30px border-1 border-border md:w-[32%]'>
          <dl className='p-4'>
            <dt className='mb-4 text-center font-bold'>
              モダンな環境の
              <br />
              web開発
            </dt>
            <dd className='text text-14px leading-7'>
              <b>React,TypeScript</b>を用いたWeb開発を行います。
              <br />
              最近は需要が増えてきた<b>Next.js</b>
              のキャッチアップやブログでのアウトプットにも注力していますので、ぜひ相談ください。
            </dd>
          </dl>
        </li>
      </ul>
    </>
  )
}
