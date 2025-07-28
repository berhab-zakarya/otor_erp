import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MemoItem } from '@/types/statistics';
interface StatisticsTableProps {
    title: string;
    data: MemoItem[] | any[];
    columns: string[];
}
const StatisticsTable = ({ title, data, columns }: StatisticsTableProps) => {
    return (
        <div className='bg-white rounded-[20px] px-4 py-6'>
            <h3 className='text-xl text-texts-black font-extrabold'>{title}</h3>
            <div className='flex h-full'>
                <Table className='mt-8'>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableHead key={index}>{column}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={item.id || index}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.sentFrom}</TableCell>
                                <TableCell>{item.sentTo}</TableCell>
                                <TableCell style={{ color: item.color }} className="font-extralight uppercase tracking-wide">
                                    {item.status.toUpperCase()}
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className='w-[1px] relative h-[212px] bg-[#ededed] mt-8'>
                    <span className='absolute bg-gradient-to-r from-[#14ADD6] to-[#384295] w-[9px] h-[40px] rounded-full top-[60px] right-0 left-0 -translate-1 shadow-xl' />
                </div>
            </div>
        </div>
    );
};

export default StatisticsTable;