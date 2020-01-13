// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styled
import { H1, H3 } from '../../styles/typography';
import DashboardLayout from './DashboardLayout';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import {
  fetchProfile,
  getRecentCards,
} from '../../modules/dashboard/dashboardActions';
import { logoutUser } from '../../modules/user/userActions';

export const DashboardComponent = props => {
  const { user } = props;

  useEffect(() => {
    props.fetchProfile();
  }, []);
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <DashboardLayout user={user} logoutUser={props.logoutUser}>
      <H1>Dashboard Test</H1>
      <H3>Welcome! Login successful</H3>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <RightSidebar user={user} getRecentCards={props.getRecentCards} />
    </DashboardLayout>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  fetchProfile,
  logoutUser,
  getRecentCards,
})(DashboardComponent);
