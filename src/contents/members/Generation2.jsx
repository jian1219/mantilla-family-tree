import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../lib/sanityClient';

const Generation1 = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch all person documents with generation 1
    client
      .fetch(
        `*[_type == "person" && generation == 2]{
          _id,
          name,
          'profilePicture': profilePic.asset->url,
        }`
      )
      .then(data => {
        setMembers(data); // Set the fetched data to the state variable
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ul className='grid laptop:grid-cols-3 gap-2 cp:grid-cols-2 tablet:grid-cols-2 '>
        {members.map((member) => (
          <li key={member._id} className='bg-violet-900 px-3 py-2 rounded-lg'>
            <Link to={`/members/${member._id}`}>
              <div className='flex justify-center'>
                <img src={member.profilePicture} alt="Profile Picture" className='h-32 w-32 object-cover rounded-full cp:h-16 cp:w-16'/>
              </div>
              <h2 className='cp:text-[12px] mt-2'>{member.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Generation1;
