/**
 * スクロール制御用カスタムフック
 * フォーム送信時の画面上部へのスクロールを管理
 */

import { useRef } from 'react'

export const useScrollToTop = () => {
  const parentRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    parentRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return {
    parentRef,
    scrollToTop,
  }
}
