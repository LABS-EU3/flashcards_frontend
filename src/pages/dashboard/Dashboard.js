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
      <RightSidebar user={user} />
    </DashboardLayout>
  );
};

const RouteContainer = styled.div`
  margin-right: 25%;
  background: whitesmoke;
`;

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  logoutUser,
})(DashboardComponent);
