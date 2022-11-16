import { Box, Button, Stack, TextField } from '@mui/material'

import { useRegisterForm } from '../hooks/'

export const RegisterForm = () => {
  const { containerProps, inputsProps, buttonProps, onSubmit, register, handleSubmit, errors } = useRegisterForm()

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
