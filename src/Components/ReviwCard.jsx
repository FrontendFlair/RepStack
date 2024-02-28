import React from 'react'

function ReviwCard({name, skill, image}) {
  return (
    <div className='bg-white text-black w-full'>
      <div className="w-full h-40"><img className='w-full h-full object-cover' src={image} alt="" /></div>
      <div className="w-full h-1.5 bg-mainGreen"></div>
        <h3 className='text-[18px] text-mainGreen font-bold text-center pt-4'>{name}</h3>
        <p className='text-[18px] font-normal text-center pb-4'>{skill}</p>
    </div>
  )
}

export default ReviwCard
