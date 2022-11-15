import { Note } from './Note'

export interface JournalState {
  notes: Note[]
  activeNote?: Note | null
  isSaving: boolean
}
