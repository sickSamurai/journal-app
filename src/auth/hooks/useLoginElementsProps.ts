import { TextFieldProps, ButtonProps } from '@mui/material'

export const useLoginElementsProps = (status: string) => {
  const inputsProps: TextFieldProps = {
    disabled: status === 'checking',
    autoComplete: 'off',
    variant: 'filled',
    fullWidth: true
  }

  const buttonsProps: ButtonProps = {
    disabled: status === 'checking',
    variant: 'contained'
  }
  return { inputsProps, buttonsProps }
}
