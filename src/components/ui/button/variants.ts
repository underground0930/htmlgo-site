import { tv } from 'tailwind-variants'

/**
 * ボタンコンポーネントのバリアント定義
 *
 * @description Tailwind Variantsを使用して、色、サイズ、角丸などのスタイルバリアントを管理
 * tailwind-mergeによる自動競合解決機能を活用
 */
export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm text-center',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'min-w-[120px] px-4 py-2.5',
    // アイコンのスタイル
    '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:flex-shrink-0',
  ],
  variants: {
    variant: {
      default: ['bg-base text-white', 'hover:bg-base/90', 'focus-visible:ring-base'],
      primary: [
        'bg-blue-600 text-white',
        'hover:bg-blue-700',
        'focus-visible:ring-blue-600',
      ],
      secondary: [
        'bg-gray-600 text-white',
        'hover:bg-gray-700',
        'focus-visible:ring-gray-600',
      ],
      outline: [
        'border border-base text-base bg-transparent',
        'hover:bg-base hover:text-white',
        'focus-visible:ring-base',
      ],
      ghost: ['text-base bg-transparent', 'hover:bg-base/10', 'focus-visible:ring-base'],
    },
    size: {
      sm: 'text-xs px-3 py-2 min-w-[100px] [&>svg]:w-3 [&>svg]:h-3',
      md: 'text-sm px-4 py-2.5 min-w-[120px] [&>svg]:w-4 [&>svg]:h-4',
      lg: 'text-base px-6 py-3 min-w-[140px] [&>svg]:w-5 [&>svg]:h-5',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: 'md',
  },
})
