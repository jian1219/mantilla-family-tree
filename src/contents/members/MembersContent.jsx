// MembersContent.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../lib/sanityClient';

import Generation1 from './Generation1';
import Generation2 from './Generation2';
import Generation3 from './Generation3';

const MembersContent = () => {

  return (
    <div className='h-screen overflow-y-scroll scrollbar px-4 py-5'>
      <h1 className='text-3xl font-medium mt-5'>Members of Family</h1>
      <div className='mt-9 '>
        <h2 className='text-lg font-semibold'>The Anak</h2>
        <div className='mt-5'>
          <Generation1 />
        </div>
        <h2 className='mt-5 text-lg font-semibold'>The Apo</h2>
        <div className='mt-5'>
          <Generation2 />
        </div>
        <h2 className='mt-5 text-lg font-semibold'>The Apo sa tuhod</h2>
        <div className='mt-5'>
          <Generation3 />
        </div>
      </div>
    </div>
  );
};

export default MembersContent;
