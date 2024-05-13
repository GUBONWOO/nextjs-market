import { authOption } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import React from 'react';
import getCurrentUser from '../actions/getCurruentUser';

const UserPage = async () => {
  // const session = await getServerSession(authOption);
  // console.log('session', session);
  const userData = await getCurrentUser();
  console.log('userData', userData);

  return <div>UserPage</div>;
};

export default UserPage;
