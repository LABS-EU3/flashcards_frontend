// Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
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
import { getRecentCards } from '../../modules/dashboard/dashboardActions';
import { logoutUser } from '../../modules/user/userActions';
import Profile from './routes/Profile/Profile';
import * as g from '../../styles/variables/global';
import StudyMode from './routes/StudyMode/StudyMode';
import LeaderBoard from './routes/LeaderBoard/LeaderBoard';
import StudySession from './routes/StudySession/StudySession';
import Settings from './routes/Settings/Settings';
import Search from './routes/Search/Search';

export const DashboardComponent = props => {
  const { user } = props;
  return (
    <CloudinaryContext>
      <ModalProvider backgroundComponent={FadingBackground}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <DashboardLayout user={user} logoutUser={props.logoutUser}>
          <RouteContainer>
            <Switch>
              <Route path="/dashboard/library" component={DeckLibrary} />
              <Route path="/dashboard/welcome" component={WelcomePage} />
              <Route path="/dashboard/deck/:deckId" component={SingleDeck} />
              <Route path="/dashboard/profile">
                <Profile user={user} />
              </Route>
              <Route path="/dashboard/study" component={StudyMode} />
              <Route path="/dashboard/leaderboard" component={LeaderBoard} />
              <Route
                path="/dashboard/studysession/:sessionId"
                component={StudySession}
              />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/search" component={Search} />
            </Switch>
          </RouteContainer>
          {/* eslint-disable-next-line react/destructuring-assignment  */}
          <RightSidebar user={user} getRecentCards={props.getRecentCards} />
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
    @media (min-width: ${g.desktopMediaBreak}px) {
      width: 75%;
      background: transparent;
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
