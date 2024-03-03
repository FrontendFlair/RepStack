import React from 'react'

function SkillSectionBtn(props) {
  return (
    <div id='simpleBtn' className='pt-2'>
      <button className='inline-block px-8 py-3 bg-mainGreen text-white rounded-full text-[18px] font-semibold hover:bg-black transition duration-300'>{props.btnText}</button>
    </div>
  )
}

export default SkillSectionBtn
