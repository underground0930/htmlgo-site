import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import { createElement } from 'react'
import { FaUser, FaArrowRight } from 'react-icons/fa'

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
type Story = StoryObj<typeof meta>

// 基本的なバリアント
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'デフォルト',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'プライマリ',
  },
}

// サイズバリエーション
export const Medium: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    children: '中サイズ',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    children: '大サイズ',
  },
}

// アイコン付きバリエーション
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    icon: createElement(FaUser),
    children: 'ユーザー登録',
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    iconRight: createElement(FaArrowRight),
    children: '次へ進む',
  },
}

// ローディング状態
export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: '送信中...',
  },
}

// 無効状態
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: '無効状態',
  },
}
