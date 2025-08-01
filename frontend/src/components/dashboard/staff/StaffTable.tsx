'use client'
import React, { useEffect, useState } from 'react'
import {
    Table, TableBody, TableCell, TableHead,
    TableHeader, TableRow
} from '@/components/ui/table'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PerPageIndicator from '@/components/layout/per-page'

const columns = [
    "S/N", "First Name", "Last Name", "Gender",
    "Staff ID", "Phone Number", "Role", "Designation", "Action more"
]

const mockData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    firstName: ['Zakaria', 'Imane', 'Khaled', 'Sara', 'Yasmine'][index % 5],
    lastName: ['Berhab', 'Mokhtari', 'Dali', 'Ziani', 'Amrani'][index % 5],
    gender: index % 2 === 0 ? 'Male' : 'Female',
    staffId: `STF-${1000 + index}`,
    phone: `+213 6${Math.floor(50000000 + Math.random() * 10000000)}`,
    role: ['Admin', 'Developer', 'HR', 'Manager', 'Designer'][index % 5],
    designation: ['Lead', 'Assistant', 'Coordinator', 'Executive', 'Intern'][index % 5]
}))

const itemsPerPage = 6

const StaffTable = () => {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(mockData.length / itemsPerPage)
    const [actualItems, setAcualItems] = useState<number>(itemsPerPage);


    const paginatedData = mockData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    )

    useEffect(() => {
        const visibleItems = mockData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        setAcualItems(visibleItems.length);
    }, [page]);

    const renderPageButton = (p: number) => (
        <button
            key={p}
            onClick={() => setPage(p)}
            className="w-[40px] h-[40px] rounded-[10px] p-[1px] bg-gradient-to-r from-[#14ADD6] to-[#384295] cursor-pointer"
        >
            <div className={`w-full h-full rounded-[9px] ${page === p ? 'text-white' : 'bg-gray-100'} flex items-center justify-center font-bold text-xs`}>
                {p}
            </div>
        </button>
    )

    return (
        <div className='bg-white rounded-[20px] px-4 py-6'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl text-texts-black font-extrabold'>All Staff</h3>
                <PerPageIndicator perPage={actualItems} />
            </div>

            <div className='flex h-full'>
                <Table className='mt-8 w-full'>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableHead key={index}>{column}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">
                                    {(page - 1) * itemsPerPage + index + 1}
                                </TableCell>
                                <TableCell>{item.firstName}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.staffId}</TableCell>
                                <TableCell>{item.phone}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>{item.designation}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="flex items-center gap-1 px-3 py-2 rounded-md border text-sm bg-transparent hover:bg-gray-100">
                                                <span className="bg-gradient-to-r from-[#14ADD6] to-[#384295] bg-clip-text text-transparent font-semibold">
                                                    View More
                                                </span>
                                            </button>

                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem onClick={() => alert(`Edit ${item.firstName}`)}>
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => alert(`Remove ${item.firstName}`)} className="text-red-600">
                                                Remove
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => renderPageButton(i + 1))}
            </div>
        </div>
    )
}

export default StaffTable
