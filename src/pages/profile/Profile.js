import React from 'react'; // import { Sidebar } from './Styles';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import ProfileMainPage from '../../components/ProfileMainPage/ProfileMainPage';

import './styles.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <ProfileSidebar />
      <ProfileMainPage />
    </div>
  );
};

export default Profile;
