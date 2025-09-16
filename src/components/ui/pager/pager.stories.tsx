import type { Meta } from '@storybook/nextjs-vite'

import { Pager } from './pager'

const meta = {
  title: 'UI/Pager',
  component: Pager,
} satisfies Meta<typeof Pager>

export default meta

export const Normal = {
  args: {
    pages: 10,
    page: 1,
    basePath: '/',
  },
}

export const End = {
  args: {
    pages: 10,
    page: 10,
    basePath: '/',
  },
}

export const WithRange = {
  args: {
    pages: 10,
    page: 4,
    basePath: '/',
    range: 1,
  },
}
