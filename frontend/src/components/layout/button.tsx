import React, { MouseEventHandler } from 'react'
import { Button } from '../ui/button'
interface OtorButton {
    title?: string;
    type?:"button" | "submit" | "reset" | undefined;
    onClick?:MouseEventHandler<unknown>
}
const OtorButton = ({ title,type,onClick }: OtorButton) => {
    return (
        <div>
            <Button
            type={type}
            
                onClick={onClick}
                className='w-[550px] h-[50px] bg-gradient-to-r from-[#14ADD6] to-[#384295] rounded-[10px] shadow-xl cursor-pointer hover:drop-shadow-xl text-sm font-extralight$'>
                {title}
            </Button>
        </div>
    )
}

export default OtorButton