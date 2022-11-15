import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

import { MainTheme } from '../themes/MainTheme'

export const LoadingPage = () => {
  const size = 48

  return (
    <Box
      display='flex'
      flexDirection={'column'}
      alignItems='center'
      justifyContent='center'
      gap={2}
      color='white'
      bgcolor={MainTheme.palette.primary.main}
      height='100vh'>
      <CircularProgress size={size} color='inherit' />
      <Typography fontSize={size} color='inherit'>
        Loading
      </Typography>
    </Box>
  )
}
