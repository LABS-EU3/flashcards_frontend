import React from 'react';
import styled from 'styled-components';
import { H1, H2, HR } from '../../styles/typography';
import { Container } from './styles';
import Card from '../cards/Cards';

import { StyledStart, ViewedCardsStyled } from '../../styles/sidebarStyles';

const DashboardCenterBar = ({ recentDecks }) => {
  return (
    <Container>
      <ViewedCardsStyled>
        <StyledStart>
          <H1 BOLD>
            Last Viewed
            <div>
              <HR />
            </div>
          </H1>
        </StyledStart>
        {recentDecks.length === 0 ? (
          <Text>
            {' '}
            <H2 BOLD>No decks viewed yet...</H2>
          </Text>
        ) : (
          recentDecks.map(deck => {
            return (
              <Card
                key={deck.deck_id}
                title={deck.deck_name}
                public={deck.public}
                totalCard={deck.cards_left}
              />
            );
          })
        )}
      </ViewedCardsStyled>
    </Container>
  );
};

export default DashboardCenterBar;
const Text = styled.div`
  text-align: center;
`;
