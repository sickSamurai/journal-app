import { Box, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import { StoreState } from '../../redux/store'
import { AddNoteFAB } from '../components/AddNoteFAB'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { SelectedNoteView } from '../views/SelectedNoteView'

export const JournalPage = () => {
  const { activeNote } = useSelector((state: StoreState) => state.JournalReducer)
  const ActiveView: JSX.Element = activeNote ? <SelectedNoteView /> : <NothingSelectedView />
  const SideBarWidth = '25%'
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar width={SideBarWidth} />
      <Stack flexGrow={1} padding={1}>
        <NavBar blankSpace={SideBarWidth} />
        {ActiveView}
      </Stack>
      <AddNoteFAB />
    </Box>
  )
}
