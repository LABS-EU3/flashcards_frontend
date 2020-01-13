import React, { useEffect } from 'react'; // import { Sidebar } from './Styles';
import { connect } from 'react-redux';
import { fetchProfile } from '../../../../modules/dashboard/dashboardActions';
import ProfileMainPage from '../../../../components/ProfileMainPage/ProfileMainPage';

const Profile = ({ user, fetchProfile }) => {
  const profileData = user.credentials;
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <ProfileMainPage profileData={profileData} />
    </>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
  { fetchProfile },
)(Profile);
