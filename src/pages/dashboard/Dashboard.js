// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styled
import { H1, H3 } from '../../styles/typography';
import Navigation from './Navigation';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import { fetchProfile } from '../../modules/dashboard/dashboardActions';

export const DashboardComponent = props => {
  const { user } = props;
  const mainContent = (
    <div>
      <H1>Dashboard Test</H1>
      <H3>Welcome! Login successful</H3>
      <RightSidebar user={user} />
    </div>
  );

  useEffect(() => {
    props.fetchProfile();
  }, []);
  return <Navigation user={user} mainContent={mainContent} />;
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchProfile })(DashboardComponent);
