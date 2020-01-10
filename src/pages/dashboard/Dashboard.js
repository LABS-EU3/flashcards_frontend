// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

// Styled
import DashboardLayout from './DashboardLayout';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import DeckLibrary from './routes/DeckLibrary';
import { fetchProfile } from '../../modules/dashboard/dashboardActions';

export const DashboardComponent = props => {
  const { user } = props;

  useEffect(() => {
    props.fetchProfile();
  }, []);
  return (
    <DashboardLayout user={user}>
      <RouteContainer>
        <Switch>
          <Route path="/dashboard/library" component={DeckLibrary} />
        </Switch>
      </RouteContainer>
      <RightSidebar user={user} />
    </DashboardLayout>
  );
};

const RouteContainer = styled.div`
  margin-right: 25%;
`;

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchProfile })(DashboardComponent);
