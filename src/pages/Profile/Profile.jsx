import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';
// Get access to profile name or id from redux state
// Display in profile component

function Profile() {
  const { user } = useSelector(userSelector);
  console.log(user);
  return <div>Welcome, {user.username}</div>;
}

export default Profile;
