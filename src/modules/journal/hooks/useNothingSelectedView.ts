import { BoxProps } from '@mui/material'

import { MainTheme } from '../../../themes/MainTheme'

export const useNothingSelectedView = () => {
  const boxProps: BoxProps = {
    color: '#fafafa',
    bgcolor: MainTheme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh'
  }

  return { boxProps }
}
