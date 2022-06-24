import { faTh, faList, faBars } from '@fortawesome/free-solid-svg-icons'

// type
import { PanelType } from 'types/index'

import ViewSwitchButton from './viewSwitchChild'

type Props = {
  type: PanelType
}

const className = {
  main: `flex justify-end border-border border-b-[1px] mb-40px pb-15px`,
}

const ViewSwitch = ({ type }: Props) => {
  return (
    <div className={className.main}>
      <ViewSwitchButton isCurrent={type === 'tile'} type={'tile'} icon={faTh} />
      <ViewSwitchButton isCurrent={type === 'list'} type={'list'} icon={faList} />
      <ViewSwitchButton isCurrent={type === 'text'} type={'text'} icon={faBars} />
    </div>
  )
}

export default ViewSwitch
