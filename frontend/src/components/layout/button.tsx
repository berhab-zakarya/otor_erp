import React from 'react'
import { Button } from '../ui/button'
interface OtorButton {
    title: string;
}
const OtorButton = ({ title }: OtorButton) => {
    return (
        <div>
            <Button
                className='w-[350px] h-[50px] bg-gradient-to-r from-[#14ADD6] to-[#384295] rounded-[10px] shadow-xl cursor-pointer hover:drop-shadow-xl text-sm font-extralight$'>
                {title}
            </Button>
        </div>
    )
}

export default OtorButton