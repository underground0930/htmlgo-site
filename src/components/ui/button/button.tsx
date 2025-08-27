'use client'

import { forwardRef } from 'react'
import { buttonVariants } from './variants'
import type { ButtonProps } from './types'

/**
 * ボタンコンポーネント（button要素版）
 *
 * @description
 * フォームの送信やクリックイベントが必要な場合に使用
 * forwardRefによりref参照をサポート
 *
 * @example
 * ```tsx
 * import { Button } from '@/components/ui/button'
 * import { FaUser, FaSave, FaArrowRight } from 'react-icons/fa'
 *
 * // 基本的な使用方法
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   送信
 * </Button>
 *
 * // 左側アイコン付き
 * <Button variant="outline" icon={<FaUser />}>
 *   ユーザー登録
 * </Button>
 *
 * // 右側アイコン付き
 * <Button variant="primary" iconRight={<FaArrowRight />}>
 *   次へ進む
 * </Button>
 *
 * // 両側アイコン付き
 * <Button variant="secondary" icon={<FaSave />} iconRight={<FaArrowRight />}>
 *   保存して続行
 * </Button>
 *
 * // ローディング状態（アイコンは自動でスピナーに切り替わる）
 * <Button loading disabled>
 *   送信中...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      icon,
      iconRight,
      loading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={buttonVariants({ variant, size, rounded, className })}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className='h-4 w-4 animate-spin' fill='none' viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {!loading && icon}
        {children}
        {!loading && iconRight}
      </button>
    )
  },
)
Button.displayName = 'Button'
