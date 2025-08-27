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

// ボタン
export const _Button = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
  },
}

// ボタン(別の色)
export const _ButtonPrimary = {
  args: {
    variant: 'primary',
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
  },
}

// ボタン(別の色)
export const _ButtonPrimaryDisabled = {
  args: {
    variant: 'primary',
    children: 'ボタン',
    disabled: true,
    onClick: () => window.alert('ボタンがクリックされました'),
  },
}

// Next.js リンク
export const NextLink = {
  args: {
    children: 'Next.js リンク',
    component: 'link',
    href: '/?hoge=1',
  },
}

// 外部リンク
export const ExternalLink = {
  args: {
    children: '外部リンク',
    component: 'a',
    href: 'https://www.google.com',
  },
}
