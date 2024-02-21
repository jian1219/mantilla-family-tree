// MembersInfo.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../lib/sanityClient';
import { Link } from 'react-router-dom';

const MembersInfo = () => {
  const [member, setMember] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch information about the selected person
    client
      .fetch(
        `*[_type == "person" && _id == $id]{
          name,
          age,
          birthday,
          address,
          'profilePicture': profilePic.asset->url,
          'images': images[].asset->url,
          'children': children[]{
            name
          },
          children[]->{
            name,
            'profilePicture': profilePic.asset->url,
            _id
          },
          parents[]->{
            name,
            'profilePicture': profilePic.asset->url,
            _id
          },
          'siblings': siblings[]->{
            'profilePicture': profilePic.asset->url,
            _id,
            name
          },
          generation
        }`,
        { id }
      )
      .then(data => {
        if (data.length > 0) {
          setMember(data[0]); // Set the fetched data to the state variable
          console.log(data)
        } else {
          console.error('Person not found');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!member) {
    return <div className='bg-violet-700 flex justify-center h-screen text-white items-center'>loading...</div>;
  }

  return (
    <div className=' h-screen bg-violet-700 flex justify-center relative'>
      <div className='bg-violet-800 tablet2:w-fit cp:w-screen tablet:w-screen px-5 pb-4 overflow-y-scroll scrollbar'>
        <Link to='/home'>
          <div className='absolute top-3 left-4 bg-violet-900 text-white px-5 py-1 rounded-md hover:bg-pink-700 font-semibold'>
            Back
          </div>
        </Link>
        <div className='tablet2:flex items-center mt-6 text-white cp:mt-[60px] tablet:mt-[60px]'>
          <img src={member.profilePicture} alt="Profile Picture" className='w-64 h-64 object-cover rounded-lg cp:mx-auto tablet:mx-auto' />
          <div className='cp:mt-5 tablet2:ml-4 px-5'>
            <h1><span className='font-semibold mr-2'>Name:</span>{member.name}</h1>
            <p><span className='font-semibold mr-2'>Age:</span> {member.age}</p>
            <p><span className='font-semibold mr-2'>Birthday:</span> {member.birthday}</p>
            <p><span className='font-semibold mr-2'>Address:</span> {member.address}</p>
            <p><span className='font-semibold mr-2'>Generation:</span> {member.generation} Gen</p>
          </div>
        </div>
        <div className='mt-5 bg-violet-700 px-4 py-2 rounded'>
          <p className='text-xl text-white mb-2'>Parents:</p>
          {member.parents && member.parents.length > 0 ? (
            <ul className='grid grid-cols-2'>
              {member.parents.map(parent => (
                <div key={parent._id} className='text-white text-center'>
                    <img src={parent.profilePicture} alt={parent.name} className='w-32 h-32 object-cover rounded-lg mx-auto'/>
                    <p>{parent.name}</p>
                </div>
              ))}
            </ul>
          ) : (
            <p className='text-center text-white text-sm'>No parents</p>
          )}
        </div>
        <div className='mt-5 bg-violet-700 px-4 py-2 rounded'>
          <p className='text-xl text-white mb-2'>Siblings:</p>
          {member.siblings && member.siblings.length > 0 ? (
            <ul className='grid grid-cols-3'>
              {member.siblings.map(sibling => (
                <div key={sibling._id } className='text-white text-center'>
                    <img src={sibling.profilePicture} alt={sibling.name} className='w-32 h-32 object-cover rounded-lg mx-auto'/>
                    <p>{sibling.name}</p>
                </div>
              ))}
            </ul>
          ) : (
            <p className='text-center text-white text-sm'>No siblings</p>
          )}
        </div>
        <div className='mt-5 bg-violet-700 px-4 py-2 rounded'>
          <p className='text-xl text-white mb-2'>Children:</p>
          {member.children && member.children.length > 0 ? (
            <ul className='grid grid-cols-3 gap-1'>
              {member.children.map(child => (
                <div key={child._id} className='text-white text-center'>
                    <img src={child.profilePicture} alt={child.name} className='cp:w-28 cp:h-24 tablet2:w-32 tablet2:h-32 object-cover rounded-lg mx-auto'/>
                    <p>{child.name}</p>
                </div>
              ))}
            </ul>
          ) : (
            <p className='text-center text-white text-sm'>No children</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersInfo;
