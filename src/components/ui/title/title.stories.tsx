import type { Meta } from '@storybook/nextjs-vite'

import { Title } from './title'

const meta = {
  title: 'UI/Title',
  component: Title,
} satisfies Meta<typeof Title>

export default meta

export const Normal = {
  args: {
    title: 'タイトル',
  },
}

export const WithText = {
  args: {
    title: 'タイトル',
    text: 'テキスト',
  },
}
