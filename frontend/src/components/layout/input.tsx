import React from 'react'
import { Input } from '../ui/input'

interface OtorInputProps {
  type: string
  placeholder: string
  id?: string
  name?: string
  required?: boolean
  width?: string 
}

const OtorInput = ({
  id,
  name,
  type,
  placeholder,
  required,
  width = 'w-[550px]', 
}: OtorInputProps) => {
  return (
    <Input
      required={required}
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${width} h-[50px] rounded-[10px]`}
    />
  )
}

export default OtorInput
