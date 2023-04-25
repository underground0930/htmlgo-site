import React from 'react'
import { IconType } from 'react-icons'
import { FaNodeJs, FaReact, FaNpm } from 'react-icons/fa'
import {
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiEslint,
  SiGithub,
  SiPrettier,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiWebpack,
  SiSass,
  SiWordpress,
  SiJavascript,
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
  SiAxios,
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
  SiJavascript,
  SiStorybook,
  FaNpm,
]

export const ServiceList: React.FC = () => {
  return (
    <>
      <div className='mb-10 flex flex-wrap justify-center'>
        {shuffle<IconType>(List).map((Icon, index) => (
          <Icon className='m-3 h-auto w-[50px]' key={index} />
        ))}
      </div>
      <ul className='after:block after:content-[""] md:flex md:flex-wrap md:justify-between after:md:w-[32%]'>
        <li className='mb-30px border-1 border-border md:w-[32%]'>
          <dl className='p-4'>
            <dt className='mb-4 text-center font-bold'>
              更新性が高い
              <br />
              Webサイトの実装
            </dt>
            <dd className='text-14px'>お客様側の立場に立ってプロジェクトを進めます</dd>
          </dl>
        </li>
        <li className='mb-30px border-1 border-border md:w-[32%]'>
          <dl className='p-4'>
            <dt className='mb-4 text-center font-bold'>使いやすいCMS構築</dt>
            <dd className='text-14px'>WordPressやMicroCMS,Newtなど</dd>
          </dl>
        </li>
        <li className='mb-30px border-1 border-border md:w-[32%]'>
          <dl className='p-4'>
            <dt className='mb-4 text-center font-bold'>モダン環境でのweb開発</dt>
            <dd className='text-14px'>React,TypeScript,Next.jsを用いたWeb開発</dd>
          </dl>
        </li>
      </ul>
    </>
  )
}
