import { Note } from '../../types/Note'

export interface JournalState {
  notes: Note[]
  activeNote?: Note | null
  isSaving: boolean
  isSideBarOpen: boolean
}
