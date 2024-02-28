import React from 'react'

function CopyrightFooter() {
    return (
        <div className='bg-[#0a0a0a] border-white mx-auto px-[5%] pb-3 '>
            <div className="border-t opacity-50"></div>
            <div className="flex items-center justify-between flex-wrap pt-3">
                <p className='text-xs text-mainGreen font-semibold'>© 2024 United B2B Inc. DBA RepStack. All rights reserved</p>
                <div className="flex items-center gap-5">
                    <p className='text-xs text-white opacity-60 hover:opacity-100 font-semibold'>Privacy Policy</p>
                    <p className='text-xs text-white opacity-60 hover:opacity-100 font-semibold'>Time Doctor FAQs</p>
                </div>
            </div>
        </div>
    )
}

export default CopyrightFooter
