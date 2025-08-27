import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './variants'

/**
 * ボタンコンポーネントのバリアント型定義
 */
export type ButtonVariants = VariantProps<typeof buttonVariants>

/**
 * Buttonコンポーネントのプロパティ型定義
 *
 * @description button要素を拡張したプロパティ定義
 * フォーム送信やクリックイベントで使用
 */
export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonVariants & {
    /** ボタン内に表示するアイコン（左側） */
    icon?: ReactNode
    /** ボタン内に表示するアイコン（右側） */
    iconRight?: ReactNode
    /** ローディング状態 */
    loading?: boolean
  }

/**
 * LinkButtonコンポーネントのプロパティ型定義
 *
 * @description Next.js Linkやa要素でのナビゲーション用プロパティ定義
 * ページ遷移で使用
 */
export type LinkButtonProps = {
  /** リンク先URL */
  href: string
  /** 外部リンクの場合true */
  external?: boolean
  /** リンクのプリフェッチを無効にする */
  prefetch?: boolean
} & Omit<ButtonVariants, 'disabled'> & {
    /** ボタンに表示するテキスト */
    children: ReactNode
    /** ボタン内に表示するアイコン（左側） */
    icon?: ReactNode
    /** ボタン内に表示するアイコン（右側） */
    iconRight?: ReactNode
    /** 追加のクラス名 */
    className?: string
  }
