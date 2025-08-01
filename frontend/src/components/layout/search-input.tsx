import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
interface SearchInputProps {
  type?: string
  placeholder?: string
  name?: string
  id?: string
  width?: string
  required?: boolean
}

const OtorSearchInput = ({
  type = 'text',
  placeholder = 'Search...',
  name,
  id,
  required,
  width = 'w-[350px]',
}: SearchInputProps) => {
  return (
    <div className={`flex items-center gap-2 bg-white border border-gray-300 rounded-[10px] px-3 h-[50px] ${width}`}>
      <Input
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className="flex-1 border-none outline-none focus:ring-0 focus-visible:ring-0 p-0 text-sm"
      />
      <Search className="text-[#6A6E83] w-5 h-5" />
    </div>
  )
}

export default OtorSearchInput