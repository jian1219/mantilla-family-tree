import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-02-26T00:00:00");
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className='h-screen bg-violet-700 items-center text-white text-center'>
      <div>
        <h1 className='pt-6 text-sm font-medium'>Mantilla FAM</h1>
        <p className='text-md mt-6'>No custom <span className='text-xl font-bold'>Domain Name </span> pa</p>
      </div>
      <div className='mt-[170px]'>
        <h1>May lalabas na palaka in</h1>
        <div className="text-4xl">
          {timeLeft.days}d : {addLeadingZero(timeLeft.hours)}h : {addLeadingZero(timeLeft.minutes)}m : {addLeadingZero(timeLeft.seconds)}s
        </div>
      </div>
      <div className='flex justify-center mt-[200px]'>
        <Link to={'/'}>
              <div className='w-[350px] bg-violet-900 py-3 mt-12 hover:bg-violet-500 rounded-md'>
                  Back
              </div>  
        </Link>
      </div>
      
    </div>
  );
}
