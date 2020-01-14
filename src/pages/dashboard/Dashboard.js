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
import { getRecentCards } from '../../modules/dashboard/dashboardActions';
import { logoutUser } from '../../modules/user/userActions';
import * as g from '../../styles/variables/global';

export const DashboardComponent = props => {
  const { user } = props;

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
  margin-right: 25%;
  height: 100%;
  background: whitesmoke;

  @media (min-width: ${g.phoneMediaBreak}px) {
    width: 100%;
    @media (min-width: ${g.desktopMediaBreak}px) {
      width: 75%
      background: whitesmoke;
    }
  }
`;

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  logoutUser,
  getRecentCards,
})(DashboardComponent);
