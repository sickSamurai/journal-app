import { StackProps, TextFieldProps, ButtonProps } from '@mui/material'
import { Status } from '../../types'

export const useRegisterElementsProps = (status: Status) => {
  const containerProps: StackProps = {
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'column',
    spacing: 2
  }

  const inputsProps: TextFieldProps = {
    disabled: status === 'checking',
    autoComplete: 'off',
    variant: 'filled',
    fullWidth: true
  }

  const buttonProps: ButtonProps = {
    type: 'submit',
    disabled: status === 'checking',
    variant: 'contained',
    sx: { width: 'fit-content' }
  }

  return { containerProps, inputsProps, buttonProps }
}
