import { Toast } from '@radix-ui/react-toast'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <Outlet>
        
      </Outlet>
    </div>
  )
}

export default UserLayout