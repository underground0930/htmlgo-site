import { AboutType } from '@/types'

import { newtClient } from './newtClient'

export const fetchAbout = async () => {
  return await newtClient
    .getContents<AboutType>({
      appUid: 'about',
      modelUid: 'about',
    })
    .then((content) => content.items)
    .catch((err) => {
      console.log(err)
      return [] as AboutType[]
    })
}
