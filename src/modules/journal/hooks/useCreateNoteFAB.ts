import { FabProps } from '@mui/material'

import { useMyDispatch, useMySelector } from '../../../redux/hooks'
import { createEmptyNoteThunk } from '../../../redux/journal'

export const useCreateNoteFAB = () => {
  const { isSaving } = useMySelector(state => state.journalReducer)
  const dispatch = useMyDispatch()

  const createNote = (): void => {
    dispatch(createEmptyNoteThunk())
  }

  const buttonProps: FabProps = {
    disabled: isSaving,
    variant: 'circular',
    sx: {
      position: 'fixed',
      right: 50,
      bottom: 50,
      color: 'primary.main',
      backgroundColor: 'secondary.main',
      ':hover': { backgroundColor: 'secondary.main', opacity: 0.8 }
    }
  }

  return { buttonProps, createNote }
}
