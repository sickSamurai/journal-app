import { Box, Typography } from '@mui/material'
import React from 'react'

import { CustomLink } from '../components/CustomLink'
import { LoginForm } from '../components/LoginForm'
import { AuthPagesLayout } from '../layouts/AuthPagesLayout'

export const LoginPage = () => {
  return (
    <AuthPagesLayout title='Login'>
      <Box display='flex' flexDirection={'column'} gap={4} className='animate__animated animate__fadeIn'>
        <LoginForm />
        <Typography align='right'>
          <CustomLink to='/register' linkText='Sign Up' />
        </Typography>
      </Box>
    </AuthPagesLayout>
  )
}
