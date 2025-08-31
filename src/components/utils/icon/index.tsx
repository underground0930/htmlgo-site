// アイコン管理、こちらのラッパーを一度通して使用するようにする

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
// アイコンの色はこちらで管理する、直接色を指定するのは禁止
export const colorVariants = {
  white: '#fff',
  red: '#ef4444',
}

/**
 * アイコンの色の型定義
 */
export type ColorVariants = keyof typeof colorVariants

/**
 * ローカルSVGアイコンのプロパティ型定義
 */
export type IconProps = {
  className?: string
  size?: number
  alt?: string
  color?: ColorVariants
}

/**
 * アイコンの色を設定
 */
const setColor = (color?: ColorVariants, defaultColor?: ColorVariants) => {
  if (defaultColor) {
    // 未入力の場合はデフォルトの色を設定したい場合に使用
    return colorVariants[color ?? defaultColor]
  }
  // 未入力の場合はデフォルトの色を設定しない
  return color ?? undefined
}

/**
 * アイコン管理
 */

// ライブラリから取得するアイコンと、ローカルのsvgアイコンを管理する
// ローカルのsvgアイコンはreactコンポーネントにする（色を変更出来るようにするため）

export const Icon = {
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
