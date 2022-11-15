import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export interface LoginFormValues {
  email: string
  password: string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required('The email is required').email('Email invalid'),
  password: Yup.string().required('The password is required').min(6, 'Password must be at least 6 characters')
})

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({ resolver: yupResolver(validationSchema) })

  return { register, handleSubmit, errors }
}
