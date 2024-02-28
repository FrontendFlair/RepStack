import React from 'react';

function AnimatedButton({ btnText }) {
  return (
    <div>
      <button className='ml-0 sm:ml-[10%] py-1.5 px-5 sm:px-8 rounded-full bg-mainGreen text-white text-base sm:text-xl font-semibold hover:bg-black transition-transform hover:scale-110'>{btnText}</button>
    </div>
  );
}

export default AnimatedButton;
