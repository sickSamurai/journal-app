import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { logoutFromFirebase } from '../../../firebase'
import { useMyDispatch } from '../../../redux/hooks'
import { cleanData, openSideBar } from '../../../redux/journal'

export const useNavbar = () => {
  const dispatch = useMyDispatch()

  const onLogout = (): void => {
    logoutFromFirebase().then(() => dispatch(cleanData()))
  }

  const onSidebarOpening = (): void => {
    dispatch(openSideBar())
  }

  return { onLogout, onSidebarOpening }
}
