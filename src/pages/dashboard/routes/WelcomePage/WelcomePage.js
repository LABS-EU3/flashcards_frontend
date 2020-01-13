import React from 'react';
import { H1, H2, HR, P } from '../../../../styles/typography';
import '../../styles/wP.css';

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="main">
        <H1>Release Notes: 0.0.1</H1>
        <div className="sub1">
          <P>
            {' '}
            - Users are now able to create their account and log into the app
          </P>
          <P> - Create, edit, and delete decks </P>
          <P> - Access their dashboard</P> <P>- View their profile </P>
          <P> - View the card of the day</P>
          <div className="sub2">
            <P>Thank you for checking us out!</P>
            <P>- The Quick Decks Team</P>
          </div>
        </div>
      </div>
      <HR />
      <div className="card">
        <H2>Card of the Day</H2>
        <P>What is the formula that you use to find that you</P>
      </div>
    </div>
  );
};

export default WelcomePage;
