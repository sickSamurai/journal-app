import { Box, Divider, Drawer, Stack, Typography } from '@mui/material'
import React from 'react'

import { useSidebar } from '../hooks'
import { NoteList } from './NoteList'

export const Sidebar = (): JSX.Element => {
  const { user, notes, boxProps, drawerProps, typographyProps } = useSidebar()

  return (
    <Box {...boxProps}>
      <Drawer {...drawerProps}>
        <Stack spacing={2} padding={2}>
          <Typography {...typographyProps}>{user?.displayName}</Typography>
          <Divider variant='middle' />
          <NoteList notes={notes}></NoteList>
        </Stack>
      </Drawer>
    </Box>
  )
}
