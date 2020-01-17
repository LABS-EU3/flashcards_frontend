import React from 'react';

import ProfileBanner from './ProfileBanner';
import ProfileImage from './ProfileImage';
import ProfileMainSection from './ProfileMainSection';

import { MainPage } from './styles';

const ProfileMainPage = ({ user }) => {
  return (
    <MainPage>
      <ProfileBanner name={user.credentials.full_name} />
      <ProfileImage user={user.credentials} />
      <ProfileMainSection user={user.credentials} />
    </MainPage>
  );
};

export default ProfileMainPage;
