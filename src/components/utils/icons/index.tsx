// ref
// https://zenn.dev/aiq_dev/articles/c6191746560398

import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RxHome } from 'react-icons/rx'
import { FaWordpress } from 'react-icons/fa'
import { IconMicrocms } from './icon-microcms'
import { IconRecapcha } from './icon-recapcha'

/**
 * アイコンの色
 */
const colorVariants = {
  white: '#fff',
  none: undefined,
}

/**
 * アイコンの色の型定義
 */
type ColorVariants = keyof typeof colorVariants

/**
 * ローカルSVGアイコンのプロパティ型定義
 */
type IconProps = {
  className?: string
  size?: number
  width?: number
  height?: number
  alt?: string
  color?: ColorVariants
}

/**
 * アイコン管理
 */
export const Icons = {
  react: ({ size = 24, color, ...props }: IconProps) => (
    <FaReact {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  typescript: ({ size = 24, color, ...props }: IconProps) => (
    <SiTypescript {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  nextjs: ({ size = 24, color, ...props }: IconProps) => (
    <SiNextdotjs {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  vercel: ({ size = 24, color, ...props }: IconProps) => (
    <SiVercel {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  tailwindcss: ({ size = 24, color, ...props }: IconProps) => (
    <SiTailwindcss {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  github: ({ size = 24, color, ...props }: IconProps) => (
    <VscGithub {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  wordpress: ({ size = 24, color, ...props }: IconProps) => (
    <FaWordpress {...props} size={size} color={colorVariants[color ?? 'none']} />
  ),
  home: ({ size = 18, color, ...props }: IconProps) => (
    <RxHome {...props} size={size} color={colorVariants[color ?? 'white']} />
  ),
  microcms: () => <IconMicrocms />,
  recaptcha: () => <IconRecapcha />,
}

/**
 * 型定義
 */
export type IconsName = keyof typeof Icons
