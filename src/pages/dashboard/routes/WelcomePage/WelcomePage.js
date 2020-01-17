import React from 'react';
import { H1, H2, P, HR } from '../../../../styles/typography';
import {
  Container,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  Main,
  Main1,
  Main2,
  Card,
  HRDiv,
} from '../../styles/WelcomePageStyles';

const WelcomePage = () => {
  return (
    <Container>
      <FlipCardInner>
        <FlipCardFront>
          <img src="img_avatar.png" alt="Avatar" />
          <H1>Welcome to Quick Decks</H1>
        </FlipCardFront>

        <FlipCardBack>
          <Main>
            <Main1>
              <H1>Release Notes: 0.0.1</H1>
              <P>
                - Users are now able to create their account and log into the
                app
              </P>
              <P>- Create, edit, and delete decks</P>
              <P>
                - Access their dashboard- View their profile- View the card of
                the day
              </P>
              <P>- View their profile- View the card of the day</P>
              <P>- View the card of the day</P>
            </Main1>

            <Main2>
              <P>Thank you for checking us out!</P>
              <P>- The Quick Decks Team</P>
            </Main2>
          </Main>
          <HRDiv>
            <HR />
          </HRDiv>
          <Card>
            <H2>Card of the Day</H2>
            <P>What is the formula that you use to find that you</P>
          </Card>
        </FlipCardBack>
      </FlipCardInner>
    </Container>
  );
};

export default WelcomePage;
