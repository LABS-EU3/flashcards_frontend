import React from 'react';
import styled from 'styled-components';
import { H1, H2, HR } from '../../styles/typography';
import { Container } from './styles';
import Card from '../cards/Cards';

import { StyledStart } from '../../styles/sidebarStyles';

export default function DashboardMiddle({ userSessions }) {
  return (
    <Container>
      <StyledStart>
        <H1 BOLD>
          Last Played
          <div>
            <HR />
          </div>
        </H1>
      </StyledStart>
      {userSessions.length === 0 ? (
        <Text>
          {' '}
          <H2 BOLD>No decks played yet...</H2>
        </Text>
      ) : (
        userSessions.map(deck => {
          return (
            <Card
              key={deck.deck_id}
              deck={deck}
              title={deck.name}
              public={deck.public}
              totalCard={deck.cards_left}
            />
          );
        })
      )}
    </Container>
  );
}

const Text = styled.div`
  text-align: center;
`;
