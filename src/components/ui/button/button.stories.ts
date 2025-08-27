import type { Meta } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import { Button } from './'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'フォーム送信やクリックイベント用のボタンコンポーネント。React 19対応版。',
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
    loading: {
      control: 'boolean',
      description: 'ローディング状態（自動でスピナー表示）',
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
    },
  },
  args: {
    onClick: fn(),
    children: 'ボタン',
  },
} satisfies Meta<typeof Button>

export default meta

// 基本的なバリアント
export const _Button = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
  },
}

export const NextLink = {
  args: {
    variant: 'primary',
    children: 'Next.js リンク',
    component: 'link',
    href: '/?hoge=1',
  },
}

// サイズバリエーション
export const ExternalLink = {
  args: {
    size: 'md',
    variant: 'primary',
    children: '外部リンク',
    component: 'a',
    href: 'https://www.google.com',
  },
}
