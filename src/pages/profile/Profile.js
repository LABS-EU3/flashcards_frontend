import React, { useEffect } from 'react'; // import { Sidebar } from './Styles';
import { connect } from 'react-redux';

import { fetchProfileData } from '../../modules/user/userActions';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import ProfileMainPage from '../../components/ProfileMainPage/ProfileMainPage';

import './styles.css';

const Profile = ({ user, fetchProfileData }) => {
  const profileData = user.credentials;
  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      <ProfileSidebar profileData={profileData} />
      <ProfileMainPage profileData={profileData} />
    </div>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
  { fetchProfileData },
)(Profile);
