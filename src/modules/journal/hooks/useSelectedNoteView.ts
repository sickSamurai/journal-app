import { SxProps, TextFieldProps } from '@mui/material'
import { ChangeEvent, DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, useRef } from 'react'

import { useMyDispatch, useMySelector } from '../../../redux/hooks'
import { deleteActiveNoteThunk, uploadImagesThunk } from '../../../redux/journal'
import { MainTheme } from '../../shared/themes/MainTheme'

type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const useSelectedNoteView = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { activeNote, isSaving } = useMySelector(state => state.journalReducer)
  const dispatch = useMyDispatch()

  if (!activeNote) throw new Error("activeNote can't be undefined or null at this point")

  const textFieldsProps: TextFieldProps = {
    variant: 'filled',
    fullWidth: true,
    autoComplete: 'off'
  }

  const fileInputProps: ReactInputProps = {
    ref: fileInputRef,
    type: 'file',
    accept: 'image/*',
    multiple: true,
    hidden: true
  }

  const iconsStyle: SxProps = {
    color: 'primary.main',
    fontSize: MainTheme.typography.h4.fontSize
  }

  const simulateFileInputClick = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }

  const handleFileInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files != null) dispatch(uploadImagesThunk(target.files))
  }

  const deleteActiveNote = () => {
    dispatch(deleteActiveNoteThunk())
  }

  return {
    handleFileInputChange,
    simulateFileInputClick,
    deleteActiveNote,
    fileInputProps,
    textFieldsProps,
    iconsStyle,
    activeNote,
    isSaving
  }
}
