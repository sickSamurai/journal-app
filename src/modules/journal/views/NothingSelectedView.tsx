import { StarOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

import { MainTheme } from '../../../themes/MainTheme'
import { useNothingSelectedView } from '../hooks/useNothingSelectedView'

export const NothingSelectedView = () => {
  const { boxProps } = useNothingSelectedView()

  return (
    <Box {...boxProps}>
      <StarOutlined sx={{ fontSize: MainTheme.typography.h3.fontSize }} />
      <Typography variant='h3'>Selecciona o crea una entrada</Typography>
    </Box>
  )
}
