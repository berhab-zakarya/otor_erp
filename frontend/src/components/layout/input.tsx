import React from 'react'
import { Input } from '../ui/input'

const OtorInput = ({ id, name, type, placeholder,required }: { type: string; placeholder: string, id?: string, name?: string ;  required?: boolean;}) => {
    return (
        <Input required={required} name={name} id={id} className='w-[550px] h-[50px] rounded-[10px]' type={type} placeholder={placeholder} />
    )
}

export default OtorInput