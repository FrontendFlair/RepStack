import React from 'react'
import Image from "../../src/assets/manager.jpg"

function BookCall() {
    return (
        <div className='bg-mainGreen px-[5%] text-white flex items-center justify-between flex-col sm:flex-row gap-6 md:gap-12 lg:gap-16'>
            <div className="w-full sm:w-[42%] mb-6 -mt-4">
                <img className='' src={Image} alt="" />
            </div>
            <div className="text-center space-y-4 w-full sm:w-[58%] sm:pt-6 pb-12">
                <h1 className='text-4xl font-semibold'>Mission-Driven Team Members</h1>
                <p className='text-xl font-semibold tracking-widest text-balance'>Onboard top agency talent while reducing payroll costs by upto 60%</p>
                <button className='py-2.5 px-7 text-black bg-white rounded-2xl text-xl font-bold hover:text-mainGreen hover:scale-110 transition-all duration-300'>Book a Discovery Call</button>
            </div>
        </div>
    )
}

export default BookCall
