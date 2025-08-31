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
  color?: string
}

/**
 * アイコン管理
 */
export const Icons = {
  react: ({ size = 24, ...props }: IconProps) => <FaReact {...props} size={size} />,
  typescript: ({ size = 24, ...props }: IconProps) => <SiTypescript {...props} size={size} />,
  nextjs: ({ size = 24, ...props }: IconProps) => <SiNextdotjs {...props} size={size} />,
  vercel: ({ size = 24, ...props }: IconProps) => <SiVercel {...props} size={size} />,
  tailwindcss: ({ size = 24, ...props }: IconProps) => <SiTailwindcss {...props} size={size} />,
  github: ({ size = 24, ...props }: IconProps) => <VscGithub {...props} size={size} />,
  wordpress: ({ size = 24, ...props }: IconProps) => <FaWordpress {...props} size={size} />,
  home: ({ size = 18, ...props }: IconProps) => <RxHome {...props} size={size} />,
  microcms: ({ className, width = 24, height = 24, alt = 'microCMS' }: IconProps) => (
    <Image src='/img/footer/icon-microcms.svg' alt={alt} width={width} height={height} className={className} />
  ),
  recaptcha: ({ className, width = 24, height = 24, alt = 'reCAPTCHA' }: IconProps) => (
    <Image src='/img/footer/icon-recaptcha.svg' alt={alt} width={width} height={height} className={className} />
  ),
}

/**
 * 型定義
 */
export type IconsName = keyof typeof Icons
