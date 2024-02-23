import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainInfo from './membersInfoContents/MainInfo';
import BioInfo from './membersInfoContents/BioInfo';
import More from './membersInfoContents/More';
import logo from '../../images/co1.jpg';

import { icons } from '../../icons/Icons'

const MembersInfo = () => {
  const [content, setContent] = useState('main'); // Default to 'main' content

  const renderContent = () => {
    switch(content) {
      case 'main':
        return <MainInfo />;
      case 'bio':
        return <BioInfo />;
      case 'more':
        return <More />;
      default:
        return null;
    }
  }

  return (
    <div className='h-screen bg-violet-700 flex justify-center relative'>
      <div className='bg-violet-800 laptop:w-[600px] tablet2:w-fit cp:w-screen tablet:w-screen pb-4 overflow-y-scroll scrollbar'>

        <div className='w- px-4 py-2 bg-violet-700 border-b-[3px] border-violet-900 flex justify-between items-center sticky top-0'>
          <div className='flex text-center items-center'>
            <img src={logo} alt={logo} className='w-14 h-14 object-cover rounded-full'/>
            <p className='ml-2 text-xs text-white font-semibold w-12 '>Mantilla Fam </p>
          </div>
          <div>
            <ul className='flex items-center gap-1 text-white text-sm'>
              <li className='my-1 py-1 rounded-sm cursor-pointer  px-2 ' onClick={() => setContent('main')}><icons.UserCircleIcon className="w-7 h-7" /></li>
              <li className=' my-1 py-2 rounded-sm cursor-pointer  px-2' onClick={() => setContent('bio')}><icons.IdentificationIcon className='w-7 h-7' /></li>
              <li className=' my-1 py-2 rounded-sm cursor-pointer  px-2' onClick={() => setContent('more')}><icons.DotsVerticalIcon className='w-7 h-7' /></li>
              <Link to='/home'>
                <li className='bg-violet-800 my-1 py-2 rounded-sm cursor-pointer hover:bg-violet-900 px-3 font-extrabold'>
                    <icons.ArrowRightIcon className='w-4 h-4' />
                </li>
              </Link>
             
            
            </ul>
          </div>
        </div>
        <div className=''>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MembersInfo;
