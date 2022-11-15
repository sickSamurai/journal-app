import { Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
  to: string
  linkText: string
}

export function CustomLink({ to, linkText }: Props): JSX.Element {
  return (
    <Link underline='hover' component={RouterLink} to={to}>
      {linkText}
    </Link>
  )
}
