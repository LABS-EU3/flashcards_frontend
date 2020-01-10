// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styled
import { H1, H3 } from '../../styles/typography';
import DashboardLayout from './DashboardLayout';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import { fetchProfile } from '../../modules/dashboard/dashboardActions';
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
      <RightSidebar user={user} />
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
})(DashboardComponent);
