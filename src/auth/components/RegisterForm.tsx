import { Box, Button, Stack, TextField } from '@mui/material'
import { SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { registerThunk } from '../../redux/auth'
import { StoreDispatch, StoreState } from '../../redux/store'
import { RegisterFormValues, useRegisterElementsProps, useRegisterForm } from '../hooks/'

export const RegisterForm = () => {
  const { authStatus } = useSelector((state: StoreState) => state.AuthReducer)
  const dispatch = useDispatch<StoreDispatch>()
  const { register, handleSubmit, errors } = useRegisterForm()

  const { containerProps, inputsProps, buttonProps } = useRegisterElementsProps(authStatus)

  const onSubmit: SubmitHandler<RegisterFormValues> = data => {
    dispatch(registerThunk(data.name, data.email, data.password))
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      <Stack {...containerProps}>
        <TextField
          {...inputsProps}
          {...register('name')}
          label='Name'
          error={errors.name != null}
          helperText={errors.name?.message}
        />
        <TextField
          {...inputsProps}
          {...register('email')}
          label='Email'
          error={errors.email != null}
          helperText={errors.email?.message}
        />
        <TextField
          {...inputsProps}
          {...register('password')}
          type='password'
          label='Password'
          error={errors.password != null}
          helperText={errors.password?.message}
        />
        <Button {...buttonProps}>Create Account</Button>
      </Stack>
    </Box>
  )
}
