import React, { MouseEventHandler } from 'react'
import { Button } from '../ui/button'

interface OtorButton {
  title?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<unknown>
  width?: string 
}

const OtorButton = ({
  title,
  type,
  onClick,
  width = 'w-[550px]', 
}: OtorButton) => {
  return (
    <div>
      <Button
        type={type}
        onClick={onClick}
        className={`${width} h-[50px] bg-gradient-to-r from-[#14ADD6] to-[#384295] rounded-[10px] shadow-xl cursor-pointer hover:drop-shadow-xl text-sm font-light`}>
        {title}
      </Button>
    </div>
  )
}

export default OtorButton
