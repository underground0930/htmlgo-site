import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { createElement } from 'react'
import { FaArrowLeft, FaHome, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

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
      options: ['default', 'primary'],
      description: 'ボタンの色バリアント',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'ボタンのサイズ（アイコンサイズも連動）',
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
    href: '/example',
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
    href: '/example',
    children: 'プライマリ',
  },
}

// サイズバリエーション
export const Medium: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    href: '/example',
    children: '中サイズ',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    href: '/example',
    children: '大サイズ',
  },
}

// 内部リンク（Next.js Link使用）
export const InternalLink: Story = {
  args: {
    variant: 'primary',
    href: '/about',
    children: 'アバウトページ',
  },
}

// 外部リンク（a要素使用）
export const ExternalLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    external: true,
    icon: createElement(FaExternalLinkAlt),
    children: '外部サイト',
  },
}

// アイコン付きバリエーション
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    href: '/back',
    icon: createElement(FaArrowLeft),
    children: '戻る',
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    href: '/next',
    iconRight: createElement(FaArrowRight),
    children: '次へ',
  },
}

export const HomeLink: Story = {
  args: {
    variant: 'default',
    href: '/',
    icon: createElement(FaHome),
    children: 'ホーム',
  },
}
