/* eslint-disable react/destructuring-assignment */
// Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { CloudinaryContext } from 'cloudinary-react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

// Styled
import { FadingBackground } from '../../components/modals/modalStyles';
import DashboardLayout from './DashboardLayout';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import WelcomePage from './routes/WelcomePage/WelcomePage';
import DeckLibrary from './routes/DeckLibrary/DeckLibrary';
import SingleDeck from './routes/SingleDeck/SingleDeck';
import {
  getRecentDecks,
  fetchSessions,
} from '../../modules/dashboard/dashboardActions';
import { logoutUser } from '../../modules/user/userActions';
import Profile from './routes/Profile/Profile';
import * as g from '../../styles/variables/global';
import StudyMode from './routes/StudyMode/StudyMode';
import LeaderBoard from './routes/LeaderBoard/LeaderBoard';
import StudySession from './routes/StudySession/StudySession';
import Settings from './routes/Settings/Settings';
import Search from './routes/Search/Search';

export const DashboardComponent = props => {
  const { user, dashboard, location } = props;
  return (
    <CloudinaryContext>
      <ModalProvider backgroundComponent={FadingBackground}>
        <DashboardLayout user={user} logoutUser={props.logoutUser}>
          <RouteContainer>
            <Switch>
              <Route path="/dashboard/library" component={DeckLibrary} />
              <Route path="/dashboard/welcome" component={WelcomePage} />
              <Route path="/dashboard/deck/:deckId" component={SingleDeck} />
              <Route path="/dashboard/profile">
                <Profile user={user} />
              </Route>
              <Route path="/dashboard/study">
                <StudyMode
                  dashboard={dashboard}
                  getRecentDecks={props.getRecentDecks}
                />
              </Route>
              <Route path="/dashboard/leaderboard" component={LeaderBoard} />
              <Route
                path="/dashboard/studysession/:sessionId"
                component={StudySession}
              />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/search" component={Search} />
              <Route render={() => <Redirect to="/dashboard/welcome" />} />
            </Switch>
          </RouteContainer>
          <RightSidebar
            location={location}
            user={user}
            dashboard={dashboard}
            getRecentDecks={props.getRecentDecks}
            // eslint-disable-next-line react/destructuring-assignment
            fetchSessions={props.fetchSessions}
          />
        </DashboardLayout>
      </ModalProvider>
    </CloudinaryContext>
  );
};

const RouteContainer = styled.div`
  margin-right: 25%;
  height: 100%;
  background: transparent;
  @media (min-width: ${g.phoneMediaBreak}px) {
    width: 100%;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    width: 75%;
    background: transparent;
  }
`;

const mapStateToProps = state => {
  return {
    user: state.user,
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {
  logoutUser,
  getRecentDecks,
  fetchSessions,
})(DashboardComponent);
