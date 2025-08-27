'use client'

import type { ComponentProps, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import Link from 'next/link'

// components
import { ButtonLoadingSpinner } from './button-loading-spinner'

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-center',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'rounded-md',
    '[&>svg]:flex-shrink-0',
  ],
  variants: {
    variant: {
      default: ['bg-base text-white', 'hover:bg-base/90', 'focus-visible:ring-base'],
      primary: [
        'bg-blue-600 text-white',
        'hover:bg-blue-700',
        'focus-visible:ring-blue-600',
      ],
    },
    size: {
      md: 'text-sm px-4 py-2.5 min-w-[120px] [&>svg]:w-4 [&>svg]:h-4',
      lg: 'text-base px-6 py-3 min-w-[140px] [&>svg]:w-5 [&>svg]:h-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

// 共通プロパティ
type CommonVariantProps = VariantProps<typeof buttonVariants> & {
  icon?: ReactNode
  iconRight?: ReactNode
  children: ReactNode
}

// button要素用プロパティ
type ButtonElementProps = Omit<ComponentProps<'button'>, 'className'> & {
  component?: 'button'
  loading?: boolean
} & CommonVariantProps

// a要素用プロパティ
type AnchorElementProps = Omit<ComponentProps<'a'>, 'className'> & {
  component: 'a'
} & CommonVariantProps

// Next.js Link用プロパティ
type LinkElementProps = Omit<ComponentProps<typeof Link>, 'className'> & {
  component: 'link'
} & CommonVariantProps

// エクスポート用の統合型
export type Props = ButtonElementProps | AnchorElementProps | LinkElementProps

export function Button(props: Props) {
  const { component = 'button', variant, size, icon, children } = props
  const className = buttonVariants({ variant, size })

  // a要素でレンダリング（外部リンク）
  if (component === 'a') {
    const { href, ...rest } = props as AnchorElementProps
    return (
      <a
        {...rest}
        href={href}
        className={className}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
        {icon}
      </a>
    )
  }

  // Next.js Linkでレンダリング（内部リンク）
  if (component === 'link') {
    const { href, prefetch = false, ...rest } = props as LinkElementProps
    return (
      <Link {...rest} href={href} className={className} prefetch={prefetch}>
        {children}
        {icon}
      </Link>
    )
  }

  // button要素でレンダリング（デフォルト）
  const { loading, disabled, ...rest } = props as ButtonElementProps
  return (
    <button {...rest} className={className} disabled={disabled || loading}>
      {loading && <ButtonLoadingSpinner />}
      {!loading && icon}
      {children}
      {!loading && iconRight}
    </button>
  )
}
