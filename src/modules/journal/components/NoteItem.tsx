import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

import { Note } from '../../../types'
import { useNoteItem } from '../hooks'

interface Props {
  note: Note
}

export const NoteItem: React.FunctionComponent<Props> = ({ note }) => {
  const { activeNote, activateNote } = useNoteItem(note)
  let StatusIcon: JSX.Element

  if (!activeNote || activeNote.id !== note.id) StatusIcon = <RadioButtonUnchecked />
  else StatusIcon = <RadioButtonChecked />

  return (
    <ListItem disableGutters>
      <ListItemButton onClick={activateNote}>
        <ListItemIcon>{StatusIcon}</ListItemIcon>
        <ListItemText
          primary={note.title}
          primaryTypographyProps={{ noWrap: true }}
          secondaryTypographyProps={{ noWrap: true }}
          secondary={note.body}
        />
      </ListItemButton>
    </ListItem>
  )
}
