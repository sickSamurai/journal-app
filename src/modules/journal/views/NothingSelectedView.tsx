import { StarOutlined } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React, { useLayoutEffect, useRef } from 'react'

import { MainTheme } from '../../shared/themes/MainTheme'

export const NothingSelectedView = () => {
  const margin = 8
  const minHeight = `calc(100vh - ${64 + margin * 2}px)`

  return (
    <Stack
      color='#fafafa'
      bgcolor={MainTheme.palette.primary.main}
      alignItems='center'
      justifyContent='center'
      minHeight={minHeight}
      margin={`${margin}px`}>
      <StarOutlined sx={{ fontSize: MainTheme.typography.h3.fontSize }} />
      <Typography variant='h3'>Selecciona o crea una entrada</Typography>
    </Stack>
  )
}
