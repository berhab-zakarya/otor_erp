import React from 'react'

const PerPageIndicator = ({ perPage }: { perPage: number }) => {
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span>Showing</span>
      <div className="w-[40px] h-[40px] rounded-[10px] p-[1px] bg-gradient-to-r from-[#14ADD6] to-[#384295]">
        <div className="w-full h-full rounded-[9px] bg-white flex items-center justify-center font-bold text-xs">
          {perPage}
        </div>
      </div>
      <span>per page</span>
    </div>
  )
}

export default PerPageIndicator
