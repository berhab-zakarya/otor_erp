import React from 'react'

const TitleHeader = ({title,description,icon:IconHeader}:{title:string;description:string;icon:React.ElementType}) => {
    return (
        <div className='flex flex-col'>
            <div className='flex gap-1'>
                <IconHeader className='text-[#384295]' />
                <h3 className='text-xl font-extrabold'>{title}</h3>
            </div>
            <p className='text-[#262626] font-thin text-[12px]'>{description}</p>
        </div>
    )
}

export default TitleHeader