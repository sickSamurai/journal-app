import { SxProps } from '@mui/material'

export const useSideBarElementsProps = (width: string) => {
  const BoxStyle: SxProps = {
    width,
    display: { md: 'block', sm: 'none', xs: 'none' }
  }

  const DrawerPaperStyle: SxProps = {
    width,
    display: { md: 'block', sm: 'none', xs: 'none' },
    boxSizing: 'border-box'
  }

  const drawerPaperProps = { sx: DrawerPaperStyle }

  return { BoxStyle, drawerPaperProps }
}
