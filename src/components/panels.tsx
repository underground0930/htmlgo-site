'use client'

// components
import PanelsTile from 'components/panelsTile'
import PanelsList from 'components/panelsList'
import PanelsText from 'components/panelsText'

// types
import { FeedObj, PanelType } from 'types/index'

type Props = {
  articles: FeedObj[]
  type: PanelType
}

const Panels = ({ articles = [], type, clickHandler }: Props) => {
  return (
    <>
      {type === 'tile' && <PanelsTile articles={articles} clickHandler={clickHandler} />}
      {type === 'list' && <PanelsList articles={articles} clickHandler={clickHandler} />}
      {type === 'text' && <PanelsText articles={articles} clickHandler={clickHandler} />}
    </>
  )
}

export default Panels
