import React from 'react'
import { IconType } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs } from 'react-icons/si'

const List: IconType[] = [FaReact, SiTypescript, SiNextdotjs]

export const ServiceList: React.FC = () => {
  return (
    <>
      <div className='mb-4 ml-auto mr-auto flex max-w-[680px] flex-wrap justify-center'>
        {List.map((Icon, index) => (
          <Icon className='m-3 h-auto w-[50px]' key={index} />
        ))}
      </div>
      <div className='max-w-[400px mx-auto mb-20px w-full text-center'>
        <dl className='p-4'>
          <dt className='mb-4 text-center font-bold'>
            モダンな環境でのweb開発
            <br />
          </dt>
          <dd className='text text-16px leading-7'>
            <b>React,TypeScript,Next.js</b>
            <br />
            を用いたWeb開発を行います。
            <br />
            <br />
            お客様側の立場に立って
            <br />
            プロジェクトを進めることを
            <br />
            心がけています。
            <br />
            <br />
            <b>ビジネスパートナーとして</b>
            <br />
            プロジェクトが円滑に進むように
            <br />
            ご協力させていただきます。
          </dd>
        </dl>
      </div>
    </>
  )
}
