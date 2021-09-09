import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faList, faBars } from '@fortawesome/free-solid-svg-icons'

// type
import { PanelType } from 'types/index'

// styles
import styles from 'styles/components/ViewSwitch.module.scss'

type Props = {
  type: PanelType
  setType: React.Dispatch<React.SetStateAction<PanelType>>
}

const ViewSwitch = ({ type, setType }: Props) => {
  return (
    <div className={styles.viewSwitch}>
      <button
        className={type === 'tile' ? 'is-current' : ''}
        onClick={() => {
          setType('tile')
        }}
      >
        <FontAwesomeIcon
          icon={faTh}
          //title="タイル"
        />
      </button>
      <button
        className={type === 'list' ? 'is-current' : ''}
        onClick={() => {
          setType('list')
        }}
      >
        <FontAwesomeIcon
          icon={faList}
          //title="リスト"
        />
      </button>
      <button
        className={type === 'text' ? 'is-current' : ''}
        onClick={() => {
          setType('text')
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          //title="テキスト"
        />
      </button>
    </div>
  )
}

export default ViewSwitch
