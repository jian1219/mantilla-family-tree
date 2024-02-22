import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../../lib/sanityClient';

const BioInfo = () => {
  const [member, setMember] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "person" && _id == $id]{
          name,
          age,
          birthday,
          address,
          'profilePicture': profilePic.asset->url,
          'firstImage': images[0].asset->url,
          'images': images[].asset->url,
          generation,
          description
        }`,
        { id }
      )
      .then(data => {
        if (data.length > 0) {
          setMember(data[0]);
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

  if (!member.description && !member.firstImage) {
    return <div className='bg-violet-700 flex justify-center h-screen text-white items-center'>No info</div>;
  }

  return (
    <div className='tablet2:w-[660px] laptop:w-[590px]'>
      <div className='mt-6'>
        <div className=' px-6'>
          {member.firstImage && (
            <img
              src={member.firstImage}
              alt="Profile Picture"
              className='w-1/3 cp:w-[200px] cp:float-end tablet:float-end tablet2:float-end laptop:float-end px-4 rounded-lg'
            />
          )}
          {member.description && <p className='text-white'>{member.description}</p>}
        </div>
      </div>

      <div className='mt-6 px-5'>
        <p className='text-center text-white font-bold border-t-2 border-slate-900 py-3'>Say Cheese!</p>
        <div className='grid tablet:grid-cols-2 gap-1'>
          {member.images.map(imageUrl => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="Image"
              className=''
              onClick={() => window.open(imageUrl, '_blank')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioInfo;
