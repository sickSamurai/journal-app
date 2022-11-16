import { useEffect, useMemo, useState } from 'react'

import { useMySelector } from '../../../redux/hooks'

export const useJournalPage = () => {
  const { activeNote } = useMySelector(state => state.journalReducer)
  const drawerWidth = '25%'

  return { activeNote, drawerWidth }
}
