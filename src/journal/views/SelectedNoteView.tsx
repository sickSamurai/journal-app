import { DeleteOutlined, FileUploadOutlined, SaveOutlined } from '@mui/icons-material'
import { Box, IconButton, Stack, SxProps, TextField, TextFieldProps, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { deleteActiveNoteThunk, updateNoteThunk, uploadImagesThunk } from '../../redux/journal'
import { StoreDispatch, StoreState } from '../../redux/store'
import { MainTheme } from '../../themes/MainTheme'
import { Note } from '../../types'
import { ImageGallery } from '../components/ImageGallery'
import { NoteCreationFormValues, useNoteCreationForm } from '../hooks/useNoteCreationForm'

const iconsStyle: SxProps = {
  color: 'primary.main',
  fontSize: MainTheme.typography.h4.fontSize
}

const textFieldsProps: TextFieldProps = {
  variant: 'filled',
  fullWidth: true,
  autoComplete: 'off'
}

export const SelectedNoteView = () => {
  const { activeNote, isSaving } = useSelector((state: StoreState) => state.JournalReducer)
  const FileInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<StoreDispatch>()
  const { register, handleSubmit, reset, errors } = useNoteCreationForm()

  if (!activeNote) throw new Error("activeNote can't be undefined or null at this point")

  const DateText = new Date(activeNote.date).toLocaleString()

  const onSubmit: SubmitHandler<NoteCreationFormValues> = data => {
    if (data.title.trim() !== '' || data.description.trim() !== '') {
      let newData: Note = { ...activeNote }
      if (data.title.trim() !== '') newData = { ...newData, title: data.title }
      if (data.description.trim() !== '') newData = { ...newData, body: data.description }
      dispatch(updateNoteThunk(newData))
      reset()
    }
  }

  const handleFileInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files != null) dispatch(uploadImagesThunk(target.files))
  }

  const deleteActiveNote = () => {
    dispatch(deleteActiveNoteThunk())
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} display='flex' flexDirection='column' gap={2}>
      <Stack direction='row' alignItems={'center'} justifyContent='space-between'>
        <Typography variant='h4'>{DateText}</Typography>
        <Stack direction='row' spacing={1}>
          <IconButton onClick={deleteActiveNote}>
            <DeleteOutlined sx={iconsStyle}></DeleteOutlined>
          </IconButton>
          <IconButton onClick={() => FileInputRef.current?.click()}>
            <input ref={FileInputRef} type='file' accept='image/*' onChange={handleFileInputChange} multiple hidden />
            <FileUploadOutlined sx={iconsStyle} />
          </IconButton>
          <IconButton type='submit' disabled={isSaving}>
            <SaveOutlined sx={iconsStyle} />
          </IconButton>
        </Stack>
      </Stack>
      <TextField
        {...register('title')}
        {...textFieldsProps}
        label='Title'
        error={errors.title != null}
        helperText={errors.title?.message}
      />
      <TextField
        {...register('description')}
        {...textFieldsProps}
        label='Description'
        placeholder='What happened today?'
        multiline
        minRows={5}
        error={errors.description != null}
        helperText={errors.description?.message}
      />
      <ImageGallery images={activeNote.images} />
    </Box>
  )
}
