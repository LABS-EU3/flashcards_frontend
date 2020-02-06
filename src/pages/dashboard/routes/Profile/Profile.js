/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileMainPage from '../../../../components/ProfileMainPage/ProfileMainPage';
import { getFavoriteTags } from '../../../../modules/dashboard/dashboardActions';

const Profile = ({ user, fetchFavTags }) => {
  useEffect(() => {
    fetchFavTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ProfileMainPage user={user} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavTags: () => dispatch(getFavoriteTags()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
