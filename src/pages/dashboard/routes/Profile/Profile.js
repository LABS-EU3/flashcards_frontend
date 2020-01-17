import React from 'react';

import ProfileMainPage from '../../../../components/ProfileMainPage/ProfileMainPage';

const Profile = ({ user }) => {
  return (
    <>
      <ProfileMainPage user={user} />
    </>
  );
};

export default Profile;
