import type { Meta } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import { Button } from './button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'フォーム送信やクリックイベント用のボタンコンポーネント。',
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

// ボタン(無効)
export const _ButtonBig = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
    size: 'lg',
  },
}

// ボタン(ローディング)
export const _ButtonLoading = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
    loading: true,
  },
}

// ボタン(アイコン)
export const _ButtonWithIcon = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
    icon: 'home',
  },
}

// ボタン(アイコンをhoverで切り替え)
export const _ButtonWithIcon2 = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
    icon: 'home',
    hoverIcon: 'github',
    iconSize: 20,
  },
}

// ボタン(アイコンをhoverで別の色)
export const _ButtonWithIcon3 = {
  args: {
    children: 'ボタン',
    onClick: () => window.alert('ボタンがクリックされました'),
    icon: 'home',
    iconSize: 20,
    hoverIconColor: 'red',
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

// ボタン(別の色,無効)
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
    disabled: false,
    href: '/?hoge=1',
  },
}

// Next.js リンク(無効)
export const NextLinkDisabled = {
  args: {
    children: 'Next.js リンク (無効)',
    component: 'link',
    disabled: true,
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

// 外部リンク(無効)
export const ExternalLinkDisabled = {
  args: {
    children: '外部リンク (無効)',
    component: 'a',
    disabled: true,
    href: 'https://www.google.com',
  },
}
