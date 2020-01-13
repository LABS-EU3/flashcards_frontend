// Import

// Libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

// Styled
import DashboardLayout from './DashboardLayout';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import DeckLibrary from './routes/DeckLibrary/DeckLibrary';
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
      <RouteContainer>
        <Switch>
          <Route path="/dashboard/library" component={DeckLibrary} />
        </Switch>
      </RouteContainer>
      {/* eslint-disable-next-line react/destructuring-assignment  */}
      <RightSidebar user={user} getRecentCards={props.getRecentCards} />
    </DashboardLayout>
  );
};

const RouteContainer = styled.div`
  background: blue;
  margin-right: 25%;
  height: 100%;
  // background: whitesmoke;
`;

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
