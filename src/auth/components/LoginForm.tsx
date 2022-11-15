import GoogleIcon from '@mui/icons-material/Google'
import { Box, Button, Stack, TextField } from '@mui/material'
import { SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { googleSignInThunk, signInThunk } from '../../redux/auth'
import { StoreDispatch, StoreState } from '../../redux/store'
import { LoginFormValues, useLoginElementsProps, useLoginForm } from '../hooks'

export const LoginForm = (): JSX.Element => {
  const { authStatus } = useSelector((state: StoreState) => state.AuthReducer)
  const dispatch = useDispatch<StoreDispatch>()
  const { register, handleSubmit, errors } = useLoginForm()
  const { inputsProps, buttonsProps } = useLoginElementsProps(authStatus)

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    dispatch(signInThunk(data.email, data.password))
  }

  function onGoogleLogin(): void {
    dispatch(googleSignInThunk())
  }

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
