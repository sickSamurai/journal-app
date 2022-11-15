import { StarOutlined } from '@mui/icons-material'
import { Box, SxProps, Typography } from '@mui/material'
import React from 'react'

import { MainTheme } from '../../themes/MainTheme'

const BoxStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '90vh',
  color: '#fafafa',
  bgcolor: MainTheme.palette.primary.main
}

export const NothingSelectedView = () => {
  return (
    <Box alignItems='center' justifyContent='center' sx={BoxStyle}>
      <StarOutlined sx={{ fontSize: 72 }} />
      <Typography variant='h3'>Selecciona o crea una entrada</Typography>
    </Box>
  )
}
