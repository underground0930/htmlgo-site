import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { Image } from '@/components/utils/image'
import { FaReact } from 'react-icons/fa'
import { RxHome } from 'react-icons/rx'
import { FaWordpress } from 'react-icons/fa'

/**
 * ローカルSVGアイコンのプロパティ型定義
 */
type IconProps = {
  className?: string
  width?: number
  height?: number
  alt?: string
}

/**
 * アイコン管理
 */
export const Icons = {
  react: ({ className, width = 24, height = 24 }: IconProps) => (
    <FaReact className={className} width={width} height={height} />
  ),
  typescript: ({ className, width = 24, height = 24 }: IconProps) => (
    <SiTypescript className={className} width={width} height={height} />
  ),
  nextjs: ({ className, width = 24, height = 24 }: IconProps) => (
    <SiNextdotjs className={className} width={width} height={height} />
  ),
  vercel: ({ className, width = 24, height = 24 }: IconProps) => (
    <SiVercel className={className} width={width} height={height} />
  ),
  tailwindcss: ({ className, width = 24, height = 24 }: IconProps) => (
    <SiTailwindcss className={className} width={width} height={height} />
  ),
  github: ({ className }: IconProps) => (
    <VscGithub className={className} width={24} height={24} />
  ),
  wordpress: ({ className, width = 24, height = 24 }: IconProps) => (
    <FaWordpress className={className} width={width} height={height} />
  ),
  home: ({ className, width = 24, height = 24 }: IconProps) => (
    <RxHome className={className} width={width} height={height} />
  ),
  microcms: ({ className, width = 24, height = 24, alt = 'microCMS' }: IconProps) => (
    <Image
      src='/img/footer/icon-microcms.svg'
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ),
  recaptcha: ({ className, width = 24, height = 24, alt = 'reCAPTCHA' }: IconProps) => (
    <Image
      src='/img/footer/icon-recaptcha.svg'
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ),
}

/**
 * 型定義
 */
export type IconsName = keyof typeof Icons
