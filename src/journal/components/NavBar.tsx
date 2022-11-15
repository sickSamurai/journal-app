import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { logoutFromFirebase } from '../../firebase/'
import { cleanData } from '../../redux/journal'
import { StoreDispatch } from '../../redux/store'
import { useNavBarMarginAutoAdjust } from '../hooks/useNavBarMarginAutoAdjust'

interface Props {
  blankSpace: string
}

export function NavBar({ blankSpace }: Props): JSX.Element {
  const dispatch = useDispatch<StoreDispatch>()
  const { navBarRef, margin } = useNavBarMarginAutoAdjust()

  const AppBarStyle = {
    width: { md: `calc(100% - ${blankSpace})`, sm: '100%', xs: '100%' }
  }

  const onLogout = (): void => {
    logoutFromFirebase().then(() => dispatch(cleanData()))
  }

  return (
    <Box sx={{ mb: `${margin}px` }}>
      <AppBar ref={navBarRef} position='fixed' sx={AppBarStyle}>
        <Toolbar>
          <IconButton sx={{ display: { md: 'none' } }} color='inherit'>
            <MenuOutlined />
          </IconButton>
          <Box display='flex' width={'100%'} alignItems='center' justifyContent='space-between'>
            <Typography variant='h6' noWrap>
              Journal App
            </Typography>
            <IconButton onClick={onLogout} color='inherit'>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
