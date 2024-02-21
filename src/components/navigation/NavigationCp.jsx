import React, { useState } from 'react';

import logo from '../../images/co1.jpg'

const NavigationCp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='px-4 py-2 bg-violet-700 ml-[2px] mr-[4px] border-b-[3px] border-violet-900 flex justify-between items-center'>
      <div className='flex text-center items-center'>
        <img src={logo} alt={logo} className='w-14 h-14 object-cover rounded-full'/>
        <p className='ml-3 text-lg font-semibold'>Mantilla Fam </p>
      </div>
      <div className=''>
        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-900 focus:outline-none focus:bg-violet-900 focus:text-white">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            
          </div>
        </div>
      )}
    </div>
  )
}

export default NavigationCp
