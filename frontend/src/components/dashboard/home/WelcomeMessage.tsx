import Image from 'next/image'
import React from 'react'

const WelcomeMessage = ({name}:{name:string}) => {

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return (
        <div className="flex flex-col">
            <div className='flex items-center'>
                <h3 className='mr-1 font-extrabold text-[20px]'>
                    Welcome Mr. {name}
                </h3>
                <Image
                    src={"/icons/happy_emoji.svg"}
                    width={24}
                    height={24}
                    alt='emoji'
                />
            </div>
            <div>
                <p className="text-[12px] text-[#262626]/90">
                    Today is {formattedDate}
                </p>
            </div>
        </div>
    )
}

export default WelcomeMessage