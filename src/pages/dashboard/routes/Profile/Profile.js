import React from 'react';
import { connect } from 'react-redux';
import ProfileMainPage from '../../../../components/ProfileMainPage/ProfileMainPage';

const Profile = ({ user }) => {
  const profileData = user.credentials;
  return (
    <>
      <ProfileMainPage profileData={profileData} />
    </>
  );
};

export default connect(state => ({
  user: state.user,
}))(Profile);
