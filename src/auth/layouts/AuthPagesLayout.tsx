import { Box, Typography } from '@mui/material'
import React from 'react'

import { MainTheme } from '../../themes/MainTheme'
import { ErrorDialog } from '../components/ErrorDialog'

type Props = {
  children: JSX.Element
  title: string
}

export const AuthPagesLayout = ({ children, title }: Props) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      bgcolor={MainTheme.palette.primary.dark}>
      <Box display={'flex'} flexDirection='column' width='33%' padding={4} gap={2} bgcolor='white' borderRadius={2}>
        <Typography variant='h5'>{title}</Typography>
        {children}
        <ErrorDialog />
      </Box>
    </Box>
  )
}
