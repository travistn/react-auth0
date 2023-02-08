import React from 'react';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const App = () => {
  return (
    <main className='flex flex-col items-center gap-8 mt-8'>
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </main>
  );
};

export default App;
