import { AddOutlined } from '@mui/icons-material'
import { Fab } from '@mui/material'
import React from 'react'

import { useCreateNoteFAB } from '../hooks'

export const AddNoteFAB = () => {
  const { buttonProps, createNote } = useCreateNoteFAB()

  return (
    <Fab {...buttonProps} onClick={createNote}>
      <AddOutlined />
    </Fab>
  )
}
