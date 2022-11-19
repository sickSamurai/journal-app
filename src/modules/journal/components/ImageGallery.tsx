import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

interface Props {
  images: string[]
}

export function ImageGallery({ images }: Props): JSX.Element {
  return (
    <Box display='flex' justifyContent={'center'} alignItems='center'>
      <ImageList variant='quilted' cols={3} sx={{ width: { xs: '100%', sm: '100%', md: '70vw' } }}>
        {images.map((url, index) => (
          <ImageListItem key={index}>
            <img src={url} loading='lazy' />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
