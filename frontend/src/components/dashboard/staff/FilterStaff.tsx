"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const FilterStaff = () => {
  const [selectedStaff, setSelectedStaff] = useState("All Staff");

  const staffOptions = [
    "All Staff",
    "Admin Staff",
    "I.T Staff",
    "Human Resource Staff"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-between w-[200px] h-[50px] px-4 rounded-lg cursor-pointer transition-colors bg-[#F2F7FF] border border-[#ACC3E7]"
        >
          <p className="text-[#A3A3A3] text-sm font-extralight">
            {selectedStaff}
          </p>
          <ChevronDown className="w-4 h-4 text-[#A3A3A3] transition-transform" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {staffOptions.map((label, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setSelectedStaff(label)}
            className="py-4 cursor-pointer hover:bg-[#F8F9FD] font-extralight"
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilterStaff
