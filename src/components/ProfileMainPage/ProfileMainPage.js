import React from 'react';

import ProfileBanner from './ProfileBanner';
import ProfileImage from './ProfileImage';
import ProfileMainSection from './ProfileMainSection';

import { MainPage} from './styles';

const ProfileMainPage = ({ profileData }) => {
  const { fullName } = profileData;
  return (
    <MainPage>
      <ProfileBanner name={fullName} />
      <ProfileImage profileData={profileData} />
      <ProfileMainSection profileData={profileData} />
    </MainPage>
  );
};

export default ProfileMainPage;
