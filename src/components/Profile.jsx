import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className='flex flex-col items-center gap-4'>
        <h5>{user.name}</h5>
        <h5>{user.nickname}</h5>
        <img src={user.picture} alt='profile-pic' className='h-[200px] w-[200px] rounded-full' />
      </div>
    )
  );
};

export default Profile;
