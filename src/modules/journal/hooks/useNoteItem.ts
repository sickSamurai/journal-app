import { useMyDispatch, useMySelector } from '../../../redux/hooks'
import { setActiveNote } from '../../../redux/journal'
import { Note } from '../../../types'

export const useNoteItem = (note: Note) => {
  const { activeNote } = useMySelector(state => state.journalReducer)
  const dispatch = useMyDispatch()

  const activateNote = (): void => {
    dispatch(setActiveNote(note.id))
  }

  return { activeNote, activateNote }
}
