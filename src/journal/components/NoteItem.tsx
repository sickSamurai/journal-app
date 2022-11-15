import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveNote } from '../../redux/journal'
import { StoreDispatch, StoreState } from '../../redux/store'
import { Note } from '../../types'

interface Props {
  note: Note
}

export const NoteItem: React.FunctionComponent<Props> = ({ note }) => {
  const { activeNote } = useSelector((state: StoreState) => state.JournalReducer)
  const dispatch = useDispatch<StoreDispatch>()

  const StatusIcon = activeNote?.id === note.id ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />

  const activateNote = (): void => {
    dispatch(setActiveNote(note.id))
  }

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
