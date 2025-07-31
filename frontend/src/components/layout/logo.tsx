import { getLogo } from '@/utils/icons'
import React from 'react'

const OtorLogo = () => {
  return (
     <div className="flex flex-col justify-center items-center">
            {getLogo({ height: 35.5, width: 35.5 })}
            <div className="flex flex-col justify-center items-center">
                <p className="text-primary-gradient text-sm font-bold my-1 p-0 leading-none">UiUxOtor</p>
                <p className="m-0 p-0 text-[13px] text-[#272525] leading-none">ERP System</p>
            </div>
        </div>
  )
}

export default OtorLogo