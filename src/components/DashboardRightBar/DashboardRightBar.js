import React from 'react';
import { H2, P } from '../../styles/typography';
import { Container, Main, Main1, Main2 } from './styles';

const DashboardRightBar = () => {
  return (
    <Container>
      <Main>
        <Main1>
          <H2>Release Notes: 0.3.0</H2>
          <P>- Users can flip a card to see the answer/question</P>
          <P>
            - Users can select from a metric -1 -2 -3 for how successful
            answering a question on a card is.
          </P>
          <P>
            - Users can track progress and continue from where they left off.
          </P>
          <P>- Search functionality for decks/cards</P>
        </Main1>

        <Main2>
          <P>Thank you for checking us out!</P>
          <P>- The Quick Decks Team</P>
        </Main2>
      </Main>
    </Container>
  );
};

export default DashboardRightBar;
