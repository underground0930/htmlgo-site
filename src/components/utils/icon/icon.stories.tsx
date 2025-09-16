/**
 * アイコンコンポーネントのStorybookストーリー
 *
 * react-iconsとローカルSVGアイコンを統合管理するIconコンポーネントの
 * 使用例とバリエーションを示すストーリー
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Icon, IconProps } from './icon'

const meta = {
  title: 'Utils/Icon',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'react-iconsとローカルSVGアイコンを統合管理するアイコンコンポーネント。サイズ、色、その他のpropsを統一的に管理できます。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'アイコンのサイズ（px）',
      defaultValue: 24,
    },
    color: {
      control: 'color',
      description: 'アイコンの色',
    },
    className: {
      control: 'text',
      description: 'CSSクラス名',
    },
  },
} satisfies Meta<IconProps>

export default meta
type Story = StoryObj<IconProps>

/**
 * Facebook アイコン
 */
export const Facebook: Story = {
  render: (args: IconProps) => <Icon.facebook {...args} />,
  args: {
    size: 24,
  },
}

/**
 * Twitter アイコン
 */
export const Twitter: Story = {
  render: (args: IconProps) => <Icon.twitter {...args} />,
  args: {
    size: 24,
  },
}

/**
 * React アイコン
 */
export const React: Story = {
  render: (args: IconProps) => <Icon.react {...args} />,
  args: {
    size: 24,
  },
}

/**
 * TypeScript アイコン
 */
export const TypeScript: Story = {
  render: (args: IconProps) => <Icon.typescript {...args} />,
  args: {
    size: 24,
  },
}

/**
 * Next.js アイコン
 */
export const NextJS: Story = {
  render: (args: IconProps) => <Icon.nextjs {...args} />,
  args: {
    size: 24,
  },
}

/**
 * Vercel アイコン
 */
export const Vercel: Story = {
  render: (args: IconProps) => <Icon.vercel {...args} />,
  args: {
    size: 24,
  },
}

/**
 * Tailwind CSS アイコン
 */
export const TailwindCSS: Story = {
  render: (args: IconProps) => <Icon.tailwindcss {...args} />,
  args: {
    size: 24,
  },
}

/**
 * GitHub アイコン
 */
export const GitHub: Story = {
  render: (args: IconProps) => <Icon.github {...args} />,
  args: {
    size: 24,
  },
}

/**
 * WordPress アイコン
 */
export const WordPress: Story = {
  render: (args: IconProps) => <Icon.wordpress {...args} />,
  args: {
    size: 24,
  },
}

/**
 * Home アイコン
 */
export const Home: Story = {
  render: (args: IconProps) => <Icon.home {...args} />,
  args: {
    size: 18,
    color: 'black',
  },
}

/**
 * microCMS アイコン
 */
export const MicroCMS: Story = {
  render: (args: IconProps) => <Icon.microcms {...args} />,
}

/**
 * reCAPTCHA アイコン
 */
export const ReCAPTCHA: Story = {
  render: (args: IconProps) => <Icon.recaptcha {...args} />,
}
