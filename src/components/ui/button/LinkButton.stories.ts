import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { createElement } from 'react'
import {
  FaHome,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaInfo,
} from 'react-icons/fa'

import { LinkButton } from './link-button'

const meta = {
  title: 'UI/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ページ遷移用のリンクボタンコンポーネント。Next.jsのLinkコンポーネントまたは外部リンク用のa要素を内部で使い分け。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'outline', 'ghost'],
      description: 'ボタンの色バリアント',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'ボタンのサイズ（アイコンサイズも連動）',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '角丸のサイズ',
    },
    external: {
      control: 'boolean',
      description: '外部リンクの場合true（target="_blank"でa要素を使用）',
    },
    prefetch: {
      control: 'boolean',
      description: 'Next.js Linkのプリフェッチを有効にする',
    },
    href: {
      control: 'text',
      description: 'リンク先URL',
    },
  },
  args: {
    href: '#',
    children: 'リンクボタン',
  },
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

// 基本的なバリアント
export const Default: Story = {
  args: {
    variant: 'default',
    href: '/',
    children: 'デフォルト',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    href: '/about',
    children: 'プライマリ',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    href: '/contact',
    children: 'セカンダリ',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    href: '/works',
    children: 'アウトライン',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    href: '/articles',
    children: 'ゴースト',
  },
}

// サイズバリエーション
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'primary',
    href: '/small',
    children: '小サイズ',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    href: '/medium',
    children: '中サイズ',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    href: '/large',
    children: '大サイズ',
  },
}

// 角丸バリエーション
export const RoundedNone: Story = {
  args: {
    rounded: 'none',
    variant: 'primary',
    href: '/rounded-none',
    children: '角丸なし',
  },
}

export const RoundedFull: Story = {
  args: {
    rounded: 'full',
    variant: 'primary',
    href: '/rounded-full',
    children: '完全な角丸',
  },
}

// アイコン付きバリエーション
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    href: '/',
    icon: createElement(FaHome),
    children: 'ホーム',
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    href: '/next',
    iconRight: createElement(FaArrowRight),
    children: '次のページ',
  },
}

export const WithBothIcons: Story = {
  args: {
    variant: 'secondary',
    href: '/info',
    icon: createElement(FaInfo),
    iconRight: createElement(FaArrowRight),
    children: '詳細を見る',
  },
}

// 外部リンク
export const ExternalLink: Story = {
  args: {
    variant: 'outline',
    href: 'https://example.com',
    external: true,
    iconRight: createElement(FaExternalLinkAlt),
    children: '外部サイト',
  },
}

export const ExternalLinkPrimary: Story = {
  args: {
    variant: 'primary',
    href: 'https://github.com',
    external: true,
    iconRight: createElement(FaExternalLinkAlt),
    children: 'GitHub',
  },
}

// ナビゲーション用
export const BackButton: Story = {
  name: '実例: 戻るボタン',
  args: {
    variant: 'ghost',
    href: '/back',
    icon: createElement(FaArrowLeft),
    children: '戻る',
  },
}

export const HomeButton: Story = {
  name: '実例: ホームボタン',
  args: {
    variant: 'default',
    href: '/',
    icon: createElement(FaHome),
    children: 'ホーム',
  },
}

export const DetailButton: Story = {
  name: '実例: 詳細ページ',
  args: {
    variant: 'primary',
    href: '/detail/123',
    iconRight: createElement(FaArrowRight),
    children: '詳細を見る',
  },
}

// プリフェッチ有効
export const WithPrefetch: Story = {
  name: 'プリフェッチ有効',
  args: {
    variant: 'primary',
    href: '/prefetch',
    prefetch: true,
    children: 'プリフェッチあり',
  },
  parameters: {
    docs: {
      description: {
        story: 'Next.jsのLinkコンポーネントでプリフェッチを有効にした例',
      },
    },
  },
}
