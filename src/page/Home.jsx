import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/co1.jpg'

import HomeContent from '../contents/home/HomeContent'
import AlbumsContent from '../contents/albums/AlbumsContent'
import EventsContent from '../contents/events/EventsContent';
import AboutContent from '../contents/about/AboutContent'
import MemberContent from '../contents/members/MembersContent'


import MembersInfo from '../contents/members/MembersInfo';

export default function Home() {
  // State variable to store the current content to display
  const [content, setContent] = useState('members'); // Default to 'home' content

  // Function to handle navigation item click
  const handleNavigationItemClick = (contentName) => {
    setContent(contentName); // Update the content state with the clicked navigation item
    // Close the menu when 'Home' is clicked
    if (contentName === 'home') {
      setIsOpen(false);
    } else if (contentName === 'albums') {
      setIsOpen(false);
    } else if (contentName === 'events') {
      setIsOpen(false);
    } else if (contentName === 'about') {
      setIsOpen(false);
    } else if (contentName === 'members') {
      setIsOpen(false);
    }
  }

  // Function to render the content based on the selected navigation item
  const renderContent = () => {
    switch(content) {
      case 'home':
        return <HomeContent />;
      case 'albums':
        return <AlbumsContent />;
      case 'events':
        return <EventsContent />;
      case 'about':
        return <AboutContent />;
      case 'members':
        return <MemberContent />;
      default:
        return null;
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-full bg-violet-600 items-center text-white text-center'>
      <div className='flex justify-center'>
        <div className='cp:w-screen tablet:w-screen laptop:w-[1300px]'>
          <div className='tablet2:flex'>
            {/* Navigation Tablet2 + */}
            <nav className='bg-violet-700 w-64 rounded-l- pt-5 h-screen tablet:hidden cp:hidden tablet2:block'>
              <div className=''>
                <div className='flex justify-center items-center'>
                  <img src={logo} alt="me" className='rounded-full w-8 h-8' />
                  <h1 className='text-lg font-semibold ml-2'>Mantilla Family</h1>
                </div>
                <div className='mt-10'>
                  <ul className='px-8'>
                    <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900'  onClick={() => handleNavigationItemClick('home')}>Home</li>
                    <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('about')}>About</li>
                    <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('members')}>Members</li>
                    <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('events')}>Events</li>
                    <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('albums')}>Albums</li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* Navigation CP and Tablet */}

            <nav className='cp:block sticky top-0 tablet2:hidden'>
              <div className='px-4 py-2 bg-violet-700 ml-[2px] mr-[1px] border-b-[3px] border-violet-900 flex justify-between items-center'>
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
                  <div className="tablet2:hidden absolute top-[70px] right-0 w-1/2 h-screen bg-violet-900 rounded">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <ul className='px-8'>
                        <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900'  onClick={() => handleNavigationItemClick('home')}>Home</li>
                        <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('about')}>About</li>
                        <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('members')}>Members</li>
                        <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('events')}>Events</li>
                        <li className='bg-violet-800 my-1 py-1 rounded-sm cursor-pointer hover:bg-violet-900' onClick={() => handleNavigationItemClick('albums')}>Albums</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Main Side */}
            <main className='flex-grow bg-violet-700 ml-[2px]'>
              {/* Render the content based on the selected navigation item */}
              {renderContent()}
            </main>

            {/* ASide Side */}
            <aside className='w-64 bg-violet-700 ml-[1px] adjust:block laptop:hidden tablet:hidden cp:hidden'>
              <h1 className='text-xl mt-4 font-bold'>ROOT</h1>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
