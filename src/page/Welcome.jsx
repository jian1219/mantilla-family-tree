import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import me1 from '../images/me1.jpg';
import co1 from '../images/co1.jpg'

export default function Welcome() {
  const slides = [
    { id: 1, content: <><img src={me1} alt="Me" className="w-56 h-56 rounded-full mx-auto" /><p className="text-sm font-medium">Peace OUT ✌️</p></> },
    { id: 2, content: <><img src={co1} alt="Me" className="w-56 h-56 rounded-full mx-auto" /><p className="text-sm font-medium">ehhh</p></> },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen bg-violet-700 flex justify-center text-white text-center pb-5 pt-2'>
      <div>
        <h1 className='text-sm cp:mt-5'>Mantilla FAM</h1>
        <h2 className='text-3xl font-medium pt-[60px]'>WELCOME!</h2>
        <div className='pt-6 relative'>
          {slides.map((slide, index) => (
            <div key={slide.id} style={{ display: index === currentSlide ? 'block' : 'none' }}>
              {slide.content}
            </div>
          ))}
          <div className=" bottom-0 flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-pink-300' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-5'>
            <p className='w-[300px]'>This Website is all About Mantilla Familly under lolo miring</p>
        </div>
        
        <Link to={'/home'}>
            <div className='bg-violet-900 py-3 mt-[90px] cp:mt-[150px] hover:bg-violet-500 rounded-md'>
                Continue
            </div>  
        </Link>

      </div>
    </div>
  );
}
