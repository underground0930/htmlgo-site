'use client'

// components
import PanelsTile from 'components/panelsTile'

// types
import { FeedObj } from 'types/feed'

type Props = {
  articles: FeedObj[]
}

const Panels = ({ articles = [], clickHandler }: Props) => {
  return (
    <>
      <PanelsTile articles={articles} clickHandler={clickHandler} />
    </>
  )
}

export default Panels
