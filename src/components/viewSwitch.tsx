import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faList, faBars } from '@fortawesome/free-solid-svg-icons'

// slice
import { setType } from '../slice/panel'

// type
import { PanelType } from 'types/index'

// styles
import styles from 'styles/components/ViewSwitch.module.scss'

type Props = {
  type: PanelType
}

const ViewSwitch = ({ type }: Props) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.viewSwitch}>
      <button
        className={type === 'tile' ? 'is-current' : ''}
        onClick={() => {
          dispatch(setType('tile'))
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
          dispatch(setType('list'))
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
          dispatch(setType('text'))
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
