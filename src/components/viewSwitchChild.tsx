'use client'

import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
// slice
import { setType } from '../slice/panel'

// type
import { PanelType } from 'types/index'

type Props = {
  type: PanelType
  icon: IconDefinition
  isCurrent: boolean
}

const className = {
  button: `opacity-50 p-0 bg-none border-none outline-none ml-15px`,
  icon: `w-[30px] h-[30px] text-main`,
}

const ViewSwitchButton = ({ type, icon, isCurrent }: Props) => {
  // const dispatch = useDispatch()
  return (
    <button
      className={`${className.button} ${isCurrent ? 'opacity-100' : ''}`}
      onClick={() => {
        // dispatch(setType(type))
      }}
    >
      <FontAwesomeIcon className={className.icon} icon={icon} />
    </button>
  )
}

export default ViewSwitchButton
