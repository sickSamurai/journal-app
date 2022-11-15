import { AddOutlined } from '@mui/icons-material'
import { Fab, SxProps } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createEmptyNoteThunk } from '../../redux/journal/'
import { StoreDispatch, StoreState } from '../../redux/store'

const buttonStyle: SxProps = {
  position: 'fixed',
  right: 50,
  bottom: 50,
  backgroundColor: 'secondary.main',
  ':hover': { backgroundColor: 'secondary.main', opacity: 0.8 }
}

export const AddNoteFAB = () => {
  const { isSaving } = useSelector((state: StoreState) => state.JournalReducer)
  const dispatch = useDispatch<StoreDispatch>()

  const addNote = (): void => {
    dispatch(createEmptyNoteThunk())
  }

  return (
    <Fab disabled={isSaving} variant='circular' onClick={addNote} sx={buttonStyle}>
      <AddOutlined />
    </Fab>
  )
}
