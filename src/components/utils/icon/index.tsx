// アイコン管理、こちらのラッパーを一度通して使用するようにする

import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RxHome } from 'react-icons/rx'
import { FaWordpress, FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

import { IconMicrocms } from './icon-microcms'
import { IconRecapcha } from './icon-recapcha'

/**
 * ローカルSVGアイコンのプロパティ型定義
 */
export type IconProps = {
  className?: string
  size?: number
  alt?: string
  color?: string
}

/**
 * アイコンの色を設定
 */
const setColor = (color?: string, defaultColor?: string) => {
  return color ? color : defaultColor ? defaultColor : undefined
}

/**
 * アイコン管理
 */

// ライブラリから取得するアイコンと、ローカルのsvgアイコンを管理する
// ローカルのsvgアイコンはreactコンポーネントにする（色を変更出来るようにするため）

export const Icon = {
  facebook: ({ size = 24, color, ...props }: IconProps) => (
    <FaFacebookSquare {...props} size={size} color={setColor(color, '#4267b2')} />
  ),
  twitter: ({ size = 24, color, ...props }: IconProps) => (
    <FaSquareXTwitter {...props} size={size} color={setColor(color)} />
  ),
  react: ({ size = 24, color, ...props }: IconProps) => (
    <FaReact {...props} size={size} color={setColor(color)} />
  ),
  typescript: ({ size = 24, color, ...props }: IconProps) => (
    <SiTypescript {...props} size={size} color={setColor(color)} />
  ),
  nextjs: ({ size = 24, color, ...props }: IconProps) => (
    <SiNextdotjs {...props} size={size} color={setColor(color)} />
  ),
  vercel: ({ size = 24, color, ...props }: IconProps) => (
    <SiVercel {...props} size={size} color={setColor(color)} />
  ),
  tailwindcss: ({ size = 24, color, ...props }: IconProps) => (
    <SiTailwindcss {...props} size={size} color={setColor(color)} />
  ),
  github: ({ size = 24, color, ...props }: IconProps) => (
    <VscGithub {...props} size={size} color={setColor(color)} />
  ),
  wordpress: ({ size = 24, color, ...props }: IconProps) => (
    <FaWordpress {...props} size={size} color={setColor(color)} />
  ),
  home: ({ size = 18, color, ...props }: IconProps) => (
    <RxHome {...props} size={size} color={setColor(color, 'white')} />
  ),
  microcms: () => <IconMicrocms />,
  recaptcha: () => <IconRecapcha />,
}

/**
 * 型定義
 */
export type IconName = keyof typeof Icon
