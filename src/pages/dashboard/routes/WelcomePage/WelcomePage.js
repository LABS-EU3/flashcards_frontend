import React from 'react';
import { H1, H2, HR, P } from '../../../../styles/typography';
import {
  Container,
  Main,
  Sub1,
  Sub2,
  Card,
} from '../../styles/WelcomePageStyles';

const WelcomePage = () => {
  return (
    <Container>
      <Main>
        <H1>Release Notes: 0.0.1</H1>
        <Sub1>
          <P>
            {' '}
            - Users are now able to create their account and log into the app
          </P>
          <P> - Create, edit, and delete decks </P>
          <P> - Access their dashboard</P> <P>- View their profile </P>
          <P> - View the card of the day</P>
          <Sub2>
            <P>Thank you for checking us out!</P>
            <P>- The Quick Decks Team</P>
          </Sub2>
        </Sub1>
        <HR />
        <Card>
          <H2>Card of the Day</H2>
          <P>What is the formula that you use to find that you</P>
        </Card>
      </Main>
    </Container>
  );
};

export default WelcomePage;
