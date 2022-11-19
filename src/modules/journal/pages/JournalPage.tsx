import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useMySelector } from '../../../redux/hooks'
import { AddNoteFAB } from '../components/AddNoteFAB'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { SelectedNoteView } from '../views/SelectedNoteView'

export const JournalPage = () => {
  const { activeNote } = useMySelector(state => state.journalReducer)
  let ActiveView: JSX.Element

  if (!activeNote) ActiveView = <NothingSelectedView />
  else ActiveView = <SelectedNoteView />

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Stack flexGrow={1}>
        <Navbar />
        {ActiveView}
      </Stack>
      <AddNoteFAB />
    </Box>
  )
}
