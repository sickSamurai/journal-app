import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { JournalState, Note } from '../../types'

export const journalSlice = createSlice({
  name: 'Journal',

  initialState: <JournalState>{
    notes: new Array<Note>(),
    isSaving: false
  },

  reducers: {
    startSaving(state) {
      state.isSaving = true
    },

    endSaving(state) {
      state.isSaving = false
    },

    createEmptyNote(state, { payload }: PayloadAction<Note>) {
      state.notes.push(payload)
    },

    updateNote(state, { payload }: PayloadAction<Note>) {
      const noteIndex = state.notes.findIndex(note => note.id === payload.id)
      state.notes[noteIndex] = payload
    },

    deleteActiveNote(state) {
      state.notes = state.notes.filter(note => note.id !== state.activeNote?.id)
      state.activeNote = null
    },

    setNotes(state, { payload }: PayloadAction<Note[]>) {
      state.notes = payload
    },

    setActiveNote(state, { payload }: PayloadAction<string>) {
      state.activeNote = state.notes.find(note => note.id === payload)
    },

    cleanData(state) {
      state.notes = []
      state.activeNote = null
    }
  }
})
