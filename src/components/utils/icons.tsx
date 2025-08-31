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
  size?: number
  width?: number
  height?: number
  alt?: string
}

/**
 * アイコン管理
 */
export const Icons = {
  react: ({ className, size = 24 }: IconProps) => (
    <FaReact className={className} size={size} />
  ),
  typescript: ({ className, size = 24 }: IconProps) => (
    <SiTypescript className={className} size={size} />
  ),
  nextjs: ({ className, size = 24 }: IconProps) => (
    <SiNextdotjs className={className} size={size} />
  ),
  vercel: ({ className, size = 24 }: IconProps) => (
    <SiVercel className={className} size={size} />
  ),
  tailwindcss: ({ className, size = 24 }: IconProps) => (
    <SiTailwindcss className={className} size={size} />
  ),
  github: ({ className }: IconProps) => (
    <VscGithub className={className} width={24} height={24} />
  ),
  wordpress: ({ className, width = 24, height = 24 }: IconProps) => (
    <FaWordpress className={className} width={width} height={height} />
  ),
  home: ({ className, size = 18 }: IconProps) => (
    <RxHome className={className} size={size} />
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
