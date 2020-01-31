/* eslint-disable max-len */
import React from 'react';
import { H2, P } from '../../../../styles/typography';
import { CardFooter } from '../../../../components/DashboardCenterBar/styles';
import DashboardCenterBar from '../../../../components/DashboardCenterBar/DashboardCenterBar';
import DashboardRightBar from '../../../../components/DashboardRightBar/DashboardRightBar';
import './styles.css';

const WelcomePage = () => {
  return (
    <div className="dashboard-welcome">
      <div className="dashboard-welcome__item">
        <DashboardCenterBar />
        <CardFooter>
          <H2>Card of the Day</H2>
          <P>What is the formula that you use to find that you</P>
        </CardFooter>
      </div>
      <div className="dashboard-welcome__item">
        <DashboardRightBar />
      </div>
    </div>
  );
};

export default WelcomePage;
