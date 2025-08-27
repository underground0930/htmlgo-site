import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import { createElement } from 'react'
import { FaSave, FaUser, FaPlus, FaArrowRight, FaDownload } from 'react-icons/fa'

import { Button } from './button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'フォーム送信やクリックイベント用のボタンコンポーネント。forwardRefによりref参照をサポート。',
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

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリ',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'アウトライン',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'ゴースト',
  },
}

// サイズバリエーション
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'primary',
    children: '小サイズ',
  },
}

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

// 角丸バリエーション
export const RoundedNone: Story = {
  args: {
    rounded: 'none',
    variant: 'primary',
    children: '角丸なし',
  },
}

export const RoundedFull: Story = {
  args: {
    rounded: 'full',
    variant: 'primary',
    children: '完全な角丸',
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

export const WithBothIcons: Story = {
  args: {
    variant: 'secondary',
    icon: createElement(FaSave),
    iconRight: createElement(FaArrowRight),
    children: '保存して続行',
  },
}

// ローディング状態
export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    disabled: true,
    children: '送信中...',
  },
}

export const LoadingWithIcon: Story = {
  args: {
    variant: 'primary',
    icon: createElement(FaSave),
    loading: true,
    disabled: true,
    children: '保存中...',
  },
}

// 無効状態
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: '無効ボタン',
  },
}

// 実践的な使用例
export const FormSubmit: Story = {
  name: '実例: フォーム送信',
  args: {
    variant: 'primary',
    size: 'lg',
    icon: createElement(FaSave),
    type: 'submit',
    children: '送信',
  },
}

export const DownloadButton: Story = {
  name: '実例: ダウンロード',
  args: {
    variant: 'outline',
    icon: createElement(FaDownload),
    children: 'ダウンロード',
  },
}

export const AddButton: Story = {
  name: '実例: 追加ボタン',
  args: {
    variant: 'primary',
    size: 'sm',
    icon: createElement(FaPlus),
    children: '追加',
  },
}
