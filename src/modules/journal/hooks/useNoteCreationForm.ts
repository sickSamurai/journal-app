import { SubmitHandler, useForm } from 'react-hook-form'

import { useMyDispatch, useMySelector } from '../../../redux/hooks'
import { updateNoteThunk } from '../../../redux/journal'
import { Note } from '../../../types'

export interface FormValues {
  title: string
  description: string
}

export function useNoteCreationForm() {
  const { activeNote } = useMySelector(state => state.journalReducer)
  const dispatch = useMyDispatch()
  const formManager = useForm<FormValues>({ defaultValues: { title: '', description: '' } })

  const { register, handleSubmit, reset } = formManager

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.title.trim() !== '' || data.description.trim() !== '') {
      let newData: Note = { ...activeNote! }
      if (data.title.trim() !== '') newData = { ...newData, title: data.title }
      if (data.description.trim() !== '') newData = { ...newData, body: data.description }
      dispatch(updateNoteThunk(newData))
      reset()
    }
  }

  return { register, handleSubmit, onSubmit, reset }
}
