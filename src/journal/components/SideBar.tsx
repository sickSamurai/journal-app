import { Box, Divider, Drawer, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import { StoreState } from '../../redux/store'
import { useSideBarElementsProps } from '../hooks/useSideBarElementsProps'
import { NoteList } from './NoteList'

interface Props {
  width: string
}

export const SideBar = ({ width }: Props): JSX.Element => {
  const { user } = useSelector((state: StoreState) => state.AuthReducer)
  const { notes } = useSelector((state: StoreState) => state.JournalReducer)
  const { BoxStyle, drawerPaperProps } = useSideBarElementsProps(width)

  return (
    <Box sx={BoxStyle}>
      <Drawer open variant='permanent' PaperProps={drawerPaperProps}>
        <Stack padding={2}>
          <Typography variant='h5' noWrap>
            {user?.displayName}
          </Typography>
          <Divider variant='middle' sx={{ my: 2 }} />
          <NoteList notes={notes}></NoteList>
        </Stack>
      </Drawer>
    </Box>
  )
}
