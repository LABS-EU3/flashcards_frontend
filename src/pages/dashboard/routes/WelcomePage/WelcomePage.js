/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardFooter } from '../../../../components/DashboardCenterBar/styles';
import DashboardCenterBar from '../../../../components/DashboardCenterBar/DashboardCenterBar';
// eslint-disable-next-line max-len
import DashboardRightBar from '../../../../components/DashboardRightBar/DashboardRightBar';
import './styles.css';
import { getCOTD } from '../../../../modules/dashboard/dashboardActions';
import COTD from './components/COTD';
import { H1, HR } from '../../../../styles/typography';

const WelcomePage = ({ getCardOfTheDay, dashboard }) => {
  const { cardOfTheDay } = dashboard;
  useEffect(() => {
    getCardOfTheDay();
  }, []);
  return (
    <div className="dashboard-welcome">
      <div className="dashboard-welcome__item">
        <DashboardCenterBar />
        {cardOfTheDay && (
          <CardFooter>
            <H1>Card of The Day</H1>
            <HR />
            <COTD card={cardOfTheDay} />
          </CardFooter>
        )}
      </div>
      <div className="dashboard-welcome__item">
        <DashboardRightBar />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCardOfTheDay: () => dispatch(getCOTD()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
