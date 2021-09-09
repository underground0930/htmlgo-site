// components
import PanelsTile from 'components/panelsTile'
import PanelsList from 'components/panelsList'
import PanelsText from 'components/panelsText'

// types
import { FeedObj, PanelType } from 'types/index'

type Props = {
  articles: FeedObj[]
  type: PanelType | ''
}

const Panels = ({ articles = [], type = '' }: Props) => {
  return (
    <>
      {type === 'tile' && <PanelsTile articles={articles} />}
      {type === 'list' && <PanelsList articles={articles} />}
      {type === 'text' && <PanelsText articles={articles} />}
    </>
  )
}

export default Panels
