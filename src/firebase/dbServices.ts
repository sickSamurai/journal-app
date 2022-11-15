import {
  collection,
  deleteDoc,
  doc,
  FirestoreError,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore/lite'

import { Note } from '../types'
import { FirebaseApp } from './config'

const FirestoreDB = getFirestore(FirebaseApp)

export async function createEmptyNoteOnDB(userId: string): Promise<Note> {
  const newDocument = doc(collection(FirestoreDB, `${userId}/journal/notes`))

  const newEmptyNote: Note = {
    id: newDocument.id,
    title: '',
    body: '',
    date: new Date().getTime(),
    images: []
  }

  await setDoc(newDocument, newEmptyNote)

  return newEmptyNote
}

export async function getNotesFromDB(userID: string) {
  const notesCollection = collection(FirestoreDB, `${userID}/journal/notes`)
  const notesDocs = await getDocs(notesCollection)
  let notes: Note[] = []
  notesDocs.forEach(document => notes.push(<Note>document.data()))
  return notes
}

export async function updateNoteOnDB(userID: string, note: Note) {
  const document = doc(FirestoreDB, `${userID}/journal/notes/${note.id}`)
  updateDoc(document, { ...note })
}

export async function deleteNoteOnDB(userID: string, noteID: string) {
  try {
    const document = doc(FirestoreDB, `${userID}/journal/notes/${noteID}`)
    await deleteDoc(document)
  } catch (error) {
    if (error instanceof FirestoreError) throw error
  }
}
