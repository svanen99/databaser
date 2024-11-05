'use client'

import React from 'react'
import { logOut } from '../../actions/log-out'
import { Button } from './button'

export const LogOutButton = () => {
  return (
    <Button variant='tertiary' onClick={() => logOut()}>
      log out
    </Button>
  )
}
