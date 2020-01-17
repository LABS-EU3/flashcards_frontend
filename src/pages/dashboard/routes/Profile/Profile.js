import React from 'react';

// eslint-disable-next-line max-len
import ProfileMainPage from '../../../../components/ProfileMainPage/ProfileMainPage';

const Profile = ({ user }) => {
  return (
    <>
      <ProfileMainPage user={user} />
    </>
  );
};

export default Profile;
