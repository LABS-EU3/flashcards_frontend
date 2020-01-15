// Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

// Styled
import DashboardLayout from './DashboardLayout';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import DeckLibrary from './routes/DeckLibrary/DeckLibrary';
import { logoutUser } from '../../modules/user/userActions';
import Profile from './routes/Profile/Profile';

export const DashboardComponent = props => {
  const { user } = props;

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <DashboardLayout user={user} logoutUser={props.logoutUser}>
      <RouteContainer>
        <Switch>
          <Route path="/dashboard/library" component={DeckLibrary} />
          <Route path="/dashboard/profile" component={Profile} />
        </Switch>
      </RouteContainer>
      <RightSidebar user={user} />
    </DashboardLayout>
  );
};

const RouteContainer = styled.div`
  margin-right: 25%;
  background: whitesmoke;
  @media (max-width: 768px) {
    margin-right: auto;
  }
`;

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  logoutUser,
})(DashboardComponent);
