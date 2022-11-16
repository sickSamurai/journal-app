import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

import { useErrorDialog } from '../hooks'

export function ErrorDialog(): JSX.Element {
  const { errorMessage, handleClose } = useErrorDialog()

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
