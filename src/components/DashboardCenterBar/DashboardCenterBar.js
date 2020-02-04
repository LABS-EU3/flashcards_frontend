import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as types from '../../modules/dashboard/dashboardTypes';
import { H1, H2, HR, P } from '../../styles/typography';
import { Container } from './styles';
import { InfoHolder, CardCount } from '../cards/Cards';
import { CardsFlexs } from '../../pages/dashboard/styles/DeckLibraryStyles';

import { StyledStart, ViewedCardsStyled } from '../../styles/sidebarStyles';

const DashboardCenterBar = ({ recentDecks }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ViewedCardsStyled>
        <StyledStart>
          <H1 BOLD>
            Recently Viewed
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
              <CardsFlexs
                onClick={() => {
                  dispatch({
                    type: types.ON_SELECT_DECK,
                    payload: { ...deck },
                  });
                }}
                key={deck.deck_id}
                width="90%"
                marginLeft="20px"
                marginRight="0"
              >
                <NavLink
                  to={`/dashboard/deck/${deck.deck_id}`}
                  className="navFlex"
                >
                  <InfoHolder>
                    <H2 BOLD>{deck.deck_name}</H2>
                  </InfoHolder>

                  <CardCount>
                    <P color="grey">
                      {/* eslint-disable-next-line max-len */}
                      {deck.flashcards[0] === null
                        ? 0
                        : deck.flashcards.length}{' '}
                      Cards
                    </P>
                  </CardCount>
                </NavLink>
              </CardsFlexs>
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
