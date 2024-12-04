import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
// import { Switch } from '@radix-ui/react-switch'
import { ModeToggle } from '../mode-toggle'

const Topbar = () => {
    return (
        
        <div className='h-[8vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-full h-full flex items-center justify-end gap-4'>
                <ModeToggle/>
                {/* <Switch /> */}
                <Avatar>
                    <AvatarImage src="https://ik.imagekit.io/SIBHI/Imagica/Untitled%20design-2.png" alt="@shadcn" />
                    <AvatarFallback>MM</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar