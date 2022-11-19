import { DeleteOutlined, FileUploadOutlined, SaveOutlined } from '@mui/icons-material'
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

import { ImageGallery } from '../components/ImageGallery'
import { useNoteCreationForm, useSelectedNoteView } from '../hooks'

export const SelectedNoteView = (): JSX.Element => {
  const { register, handleSubmit, onSubmit } = useNoteCreationForm()

  const {
    handleFileInputChange,
    simulateFileInputClick,
    deleteActiveNote,
    fileInputProps,
    iconsStyle,
    textFieldsProps,
    activeNote,
    isSaving
  } = useSelectedNoteView()

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      display='flex'
      flexDirection='column'
      padding={2}
      gap={2}>
      <input {...fileInputProps} onChange={handleFileInputChange} />
      <Stack direction='row' alignItems={'center'} justifyContent='space-between'>
        <Typography variant='h4'>{new Date(activeNote.date).toLocaleString()}</Typography>
        <Stack direction='row' spacing={1}>
          <IconButton type='submit' disabled={isSaving} children={<SaveOutlined sx={iconsStyle} />} />
          <IconButton onClick={simulateFileInputClick} children={<FileUploadOutlined sx={iconsStyle} />} />
          <IconButton onClick={deleteActiveNote} children={<DeleteOutlined sx={iconsStyle} />} />
        </Stack>
      </Stack>
      <TextField
        {...register('title')}
        {...textFieldsProps}
        label='Title'
        placeholder='How you want name this important note?'
      />
      <TextField
        {...register('description')}
        {...textFieldsProps}
        label='Description'
        placeholder='What happened today?'
        multiline
        minRows={5}
      />
      <ImageGallery images={activeNote.images} />
    </Box>
  )
}
