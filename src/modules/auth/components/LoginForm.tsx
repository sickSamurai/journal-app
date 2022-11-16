import GoogleIcon from '@mui/icons-material/Google'
import { Box, Button, Stack, TextField } from '@mui/material'

import { useLoginForm } from '../hooks'

export const LoginForm = (): JSX.Element => {
  const { inputsProps, buttonsProps, onSubmit, onGoogleLogin, register, handleSubmit, errors } = useLoginForm()

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='column' spacing={2} justifyContent='center'>
        <TextField
          {...register('email')}
          {...inputsProps}
          label='Email'
          error={errors.email != null}
          helperText={errors.email?.message}
        />
        <TextField
          {...register('password')}
          {...inputsProps}
          label='Password'
          type='password'
          error={errors.password != null}
          helperText={errors.password?.message}
        />
        <Stack justifyContent='center' direction='row' spacing={2}>
          <Button {...buttonsProps} type='submit'>
            Log In
          </Button>
          <Button {...buttonsProps} onClick={onGoogleLogin}>
            <GoogleIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
