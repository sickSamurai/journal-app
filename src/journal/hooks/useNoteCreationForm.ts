import { useForm } from 'react-hook-form'

export interface NoteCreationFormValues {
  title: string
  description: string
}

export function useNoteCreationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NoteCreationFormValues>()
  return { register, handleSubmit, reset, errors }
}
