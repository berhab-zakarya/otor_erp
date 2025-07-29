import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MemoItem, StatisticsCount } from '@/types/statistics';
import { ChartPieDonut } from './pie-chart.donut';
import { chartConfig, chartData } from '@/constants/constants';
interface StatisticsTableProps {
    title: string;
    data: MemoItem[] | any[];
    columns: string[];
}
export const StatisticsTable = ({ title, data, columns }: StatisticsTableProps) => {
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

interface StatisticsChartProps {
    title: string;
    description: string;
    data: StatisticsCount;

}
export const StatisticsChart = ({ title, description, data }: StatisticsChartProps) => {
    return (
        <div className='bg-white rounded-[20px] px-4 py-6'>
            <h3 className='text-xl text-texts-black  font-extrabold'>{title}</h3>
            <div className='grid grid-cols-2 h-full '>
                <div className=' mt-16 h-full '>
                    <h3 className='text-[16px] font-extrabold'>{description}</h3>

                    <div className='flex flex-col gap-6 mt-8   '>
                        
                        <div className='flex gap-2 items-center  '>
                            <span className='w-[6px] h-[28px] bg-[#F29421] rounded-full'/>
                            <p>{data.pending}</p>  <p className='font-extralight'>Pending</p>
                        </div>
                           <div className='flex gap-2 items-center  '>
                            <span className='w-[6px] h-[28px] bg-[#10A142] rounded-full'/>
                            <p>{data.approved}</p> <p className='font-extralight'>Approved</p>
                        </div>
                           <div className='flex gap-2 items-center  '>
                            <span className='w-[6px] h-[28px] bg-[#E54F53] rounded-full'/>
                            <p>{data.rejected}</p> <p className='font-extralight'>Rejected</p>
                        </div>
                      
                    </div>
                </div>
                <div className='  mt-16'
                >
                    <ChartPieDonut data={chartData} config={chartConfig}/>
                </div>

            </div>
        </div>
    );
};


