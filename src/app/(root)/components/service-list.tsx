/**
 * サービス一覧コンポーネント
 * 使用技術のアイコンを表示し、サービス内容を紹介します。
 */

import React from 'react'
import { Icons, type IconsName } from '@/components/utils/icons'

/**
 * 表示するサービス技術のアイコンリスト
 */
const iconList: IconsName[] = ['react', 'typescript', 'nextjs', 'wordpress']

export const ServiceList: React.FC = () => {
  return (
    <>
      <div className='mr-auto mb-4 ml-auto flex max-w-[680px] flex-wrap justify-center'>
        {iconList.map((iconName) => {
          const IconComponent = Icons[iconName]
          return <IconComponent className='m-3 h-auto w-12.5' key={iconName} />
        })}
      </div>
      <div className='max-w-[400px mx-auto mb-5 w-full text-center'>
        <dl className='p-4'>
          <dt className='mb-4 text-center font-bold'>
            モダンな環境でのweb開発
            <br />
          </dt>
          <dd className='text text-base leading-7'>
            <b>React,TypeScript,Next.js,WordPress</b>
            <br />
            を用いたWeb開発を行います。
            <br />
            <br />
            お客様側の立場に立って
            <br />
            プロジェクトを進めることを
            <br />
            心がけています。
          </dd>
        </dl>
      </div>
    </>
  )
}
