import { yupResolver } from '@hookform/resolvers/yup'
import { ButtonProps, StackProps, TextFieldProps } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { registerThunk } from '../../../redux/auth'
import { useMyDispatch } from '../../../redux/hooks'

interface FormValues {
  name: string
  email: string
  password: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('The name is required'),
  email: Yup.string().required('The email is required').email('Email invalid'),
  password: Yup.string().required('The password is required').min(6, 'Password must be at least 6 characters')
})

export const useRegisterForm = () => {
  const dispatch = useMyDispatch()

  const containerProps: StackProps = {
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'column',
    spacing: 2
  }

  const inputsProps: TextFieldProps = {
    autoComplete: 'off',
    variant: 'filled',
    fullWidth: true
  }

  const buttonProps: ButtonProps = {
    type: 'submit',
    variant: 'contained',
    sx: { width: 'fit-content' }
  }

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(registerThunk(data.name, data.email, data.password))
  }

  const formManager = useForm<FormValues>({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(validationSchema)
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = formManager

  return { containerProps, inputsProps, buttonProps, onSubmit, register, handleSubmit, errors }
}
