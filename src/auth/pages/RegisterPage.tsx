import { Box, Typography } from '@mui/material'
import React from 'react'

import { CustomLink } from '../components/CustomLink'
import { RegisterForm } from '../components/RegisterForm'
import { AuthPagesLayout } from '../layouts/AuthPagesLayout'

export const RegisterPage = () => {
  return (
    <AuthPagesLayout title='Register'>
      <Box display='flex' flexDirection={'column'} gap={4} className='animate__animated animate__fadeIn'>
        <RegisterForm />
        <Typography align='right'>
          ¿Ya tienes una cuenta? <CustomLink to='/' linkText='Ingresar' />
        </Typography>
      </Box>
    </AuthPagesLayout>
  )
}
