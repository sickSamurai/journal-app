import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { useNavbar } from '../hooks'

export function Navbar(): JSX.Element {
  const { onLogout, onSidebarOpening } = useNavbar()

  return (
    <AppBar position='static'>
      <Toolbar component={Stack} direction='row' alignItems='center' spacing={2}>
        <IconButton sx={{ display: { md: 'none' } }} color='inherit' onClick={onSidebarOpening}>
          <MenuOutlined />
        </IconButton>
        <Box width={'100%'} display='flex' alignItems='center' justifyContent='space-between'>
          <Typography variant='h6' noWrap>
            Journal App
          </Typography>
          <IconButton onClick={onLogout} color='inherit'>
            <LogoutOutlined />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
