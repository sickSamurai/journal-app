import { yupResolver } from '@hookform/resolvers/yup'
import { ButtonProps, TextFieldProps } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { googleSignInThunk, signInThunk } from '../../../redux/auth'
import { useMyDispatch } from '../../../redux/hooks'

interface FormValues {
  email: string
  password: string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required('The email is required').email('Email invalid'),
  password: Yup.string().required('The password is required').min(6, 'Password must be at least 6 characters')
})

export const useLoginForm = () => {
  const dispatch = useMyDispatch()

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(signInThunk(data.email, data.password))
  }

  const onGoogleLogin = (): void => {
    dispatch(googleSignInThunk())
  }

  const inputsProps: TextFieldProps = {
    autoComplete: 'off',
    variant: 'filled',
    fullWidth: true
  }

  const buttonsProps: ButtonProps = { variant: 'contained' }

  const formManager = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(validationSchema)
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = formManager

  return { inputsProps, buttonsProps, onGoogleLogin, onSubmit, register, handleSubmit, errors }
}
