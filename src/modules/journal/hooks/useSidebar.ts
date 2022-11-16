import { BoxProps, DrawerProps, TypographyPropsVariantOverrides, useMediaQuery } from '@mui/material'
import { useState } from 'react'

import { useMyDispatch, useMySelector } from '../../../redux/hooks'
import { closeSideBar } from '../../../redux/journal'
import { MainTheme } from '../../../themes/MainTheme'

type TypographyProps = TypographyPropsVariantOverrides

export const useSidebar = () => {
  const { user } = useMySelector(state => state.authReducer)
  const { notes, isSideBarOpen } = useMySelector(state => state.journalReducer)
  const dispatch = useMyDispatch()
  const drawerWidth = '25%'

  const boxProps: BoxProps = {
    width: drawerWidth,
    display: { md: 'block', sm: 'none', xs: 'none' }
  }

  const permanentDrawerProps: DrawerProps = {
    open: true,
    variant: 'permanent',
    PaperProps: {
      sx: {
        width: drawerWidth,
        boxSizing: 'border-box'
      }
    }
  }

  const temporaryDrawerProps: DrawerProps = {
    open: isSideBarOpen,
    onClose: () => dispatch(closeSideBar()),
    variant: 'temporary',
    PaperProps: {
      sx: {
        width: drawerWidth,
        boxSizing: 'border-box'
      }
    }
  }

  const typographyProps: TypographyProps = {
    noWrap: true,
    sx: {
      typography: { lg: 'h4', md: 'h5', sm: 'h6', xs: 'h6' }
    }
  }

  const lessThanMid = useMediaQuery(MainTheme.breakpoints.down('md'))

  const drawerProps = lessThanMid ? temporaryDrawerProps : permanentDrawerProps

  return { user, notes, boxProps, drawerProps, typographyProps }
}
