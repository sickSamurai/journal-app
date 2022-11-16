import { postImagesToCloudinary } from '../../api/cloudinary'
import { createEmptyNoteOnDB, deleteNoteOnDB, getNotesFromDB, updateNoteOnDB } from '../../firebase/dbServices'
import { Note } from '../../types'
import { VoidThunkAction } from '../types/VoidThunkAction'
import { journalSlice } from './journalSlice'

export const {
  startSaving,
  endSaving,
  createEmptyNote,
  setActiveNote,
  setNotes,
  updateNote,
  deleteActiveNote,
  cleanData,
  openSideBar,
  closeSideBar
} = journalSlice.actions

export function loadNotesThunk(userId: string): VoidThunkAction {
  return async dispatch => {
    dispatch(setNotes(await getNotesFromDB(userId)))
  }
}

export function createEmptyNoteThunk(): VoidThunkAction {
  return async (dispatch, getState) => {
    const actualUser = getState().authReducer.user
    if (actualUser == null) throw new Error("The user can't be null at this point!!!")

    dispatch(startSaving())
    const savedNote = await createEmptyNoteOnDB(actualUser.uid)
    dispatch(createEmptyNote(savedNote))
    dispatch(setActiveNote(savedNote.id))
    dispatch(endSaving())
  }
}

export function updateNoteThunk(note: Note): VoidThunkAction {
  return async (dispatch, getState) => {
    const actualUser = getState().authReducer.user
    if (actualUser === null) throw new Error("The user can't be null at this point!!!")

    dispatch(startSaving())
    dispatch(updateNote(note))
    await updateNoteOnDB(actualUser.uid, note)
    dispatch(setActiveNote(note.id))
    dispatch(endSaving())
  }
}

export function uploadImagesThunk(files: FileList): VoidThunkAction {
  return async (dispatch, getState) => {
    const { activeNote } = getState().journalReducer
    if (!activeNote) throw new Error('Something going bad: ActiveNote must not be null nor undefined at this point!!!')

    dispatch(startSaving())
    const uploadedImages = await postImagesToCloudinary(files)
    const images = activeNote.images.concat(uploadedImages)
    dispatch(updateNoteThunk({ ...activeNote, images }))
    dispatch(endSaving())
  }
}

export function deleteActiveNoteThunk(): VoidThunkAction {
  return async (dispatch, getState) => {
    const actualUser = getState().authReducer.user
    const activeNote = getState().journalReducer.activeNote

    if (!activeNote) throw new Error('Something going bad: ActiveNote must not be null nor undefined at this point!!!')
    if (!actualUser) throw new Error('Something going bad: ActualUser must not be null nor undefined at this point!!!')

    dispatch(deleteActiveNote())
    await deleteNoteOnDB(actualUser.uid, activeNote.id)
  }
}
