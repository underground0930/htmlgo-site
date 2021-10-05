// components
import PanelsTile from 'components/panelsTile'
import PanelsList from 'components/panelsList'
import PanelsText from 'components/panelsText'

// types
import { FeedObj, PanelType } from 'types/index'

// libs
import { event } from 'libs/gtag'

type Props = {
  articles: FeedObj[]
  type: PanelType | ''
  clickHandler: (label: string, value: string) => void
}

const Panels = ({ articles = [], type = '', clickHandler }: Props) => {
  return (
    <>
      {type === 'tile' && <PanelsTile articles={articles} clickHandler={clickHandler} />}
      {type === 'list' && <PanelsList articles={articles} clickHandler={clickHandler} />}
      {type === 'text' && <PanelsText articles={articles} clickHandler={clickHandler} />}
    </>
  )
}

export default Panels
