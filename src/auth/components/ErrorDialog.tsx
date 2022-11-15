import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { cleanErrors } from '../../redux/auth'
import { StoreDispatch, StoreState } from '../../redux/store'

export function ErrorDialog(): JSX.Element {
  const { errorMessage } = useSelector((state: StoreState) => state.AuthReducer)
  const dispatch = useDispatch<StoreDispatch>()

  function handleClose(): void {
    dispatch(cleanErrors())
  }

  return (
    <Dialog open={errorMessage != null} onClose={handleClose}>
      <Box className='animate__animated animate__shakeX'>
        <DialogTitle color='error'>Error!!!</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
