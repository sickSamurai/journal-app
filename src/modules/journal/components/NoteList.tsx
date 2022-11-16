import { List } from '@mui/material'
import React from 'react'

import { Note } from '../../../types'
import { NoteItem } from './NoteItem'

interface Props {
  notes: Note[]
}

export const NoteList = ({ notes }: Props) => {
  return (
    <List>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </List>
  )
}
