import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { HR } from '../../../../../styles/typography';
import 'react-image-lightbox/style.css';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
} from '../../../styles/DeckLibraryStyles';
import * as types from '../../../../../modules/dashboard/dashboardTypes';
import { Input } from '../../../../../styles/forms';
import { NavSearch } from '../../../../../components/SearchBox/styles';
import DeckCard from './DeckCard';
import { TopHolder, CardSearch } from './styles/cardSectionStyles';

const Decks = ({ cards, deleteCard, dashboard }) => {
  const { singleDeckCards } = dashboard;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };

  const filterThroughCards = async () => {
    const cardsFiltered =
      inputValue !== ''
        ? await cards.filter(card => {
            return (
              card.question
                // regenx replaces all special characters with ''
                .replace(/[^\w\s]/gi, '')
                .toUpperCase()
                .match(inputValue.replace(/[^\w\s]/gi, '').toUpperCase()) ||
              card.answer
                .replace(/[^\w\s]/gi, '')
                .toUpperCase()
                .match(inputValue.replace(/[^\w\s]/gi, '').toUpperCase())
            );
          })
        : cards;
    dispatch({
      type: types.ON_DECK_CARDS_FETCH_SUCCESS,
      payload: cardsFiltered,
    });
  };

  useEffect(() => {
    if (cards) {
      if (cards[0] !== null) {
        filterThroughCards();
      }
    }
  }, [inputValue]);

  const handleDelete = card => {
    deleteCard(card);
  };

  const handleUpdate = card => {
    dispatch({ type: types.ON_START_CREATING_CARD });
    dispatch({ type: types.ON_UPDATE_CARD_START, payload: card });
  };

  return (
    <Collection>
      <TopHolder>
        <CollectionLabel>
          <HR />
        </CollectionLabel>
        <CardSearch>
          <NavSearch>
            <Input
              type="text"
              name="cardSearch"
              placeholder="Search deck"
              onChange={e => {
                if (cards[0] !== null) {
                  handleSearchChange(e);
                  filterThroughCards();
                }
                handleSearchChange(e);
              }}
              value={inputValue}
            />
          </NavSearch>

          <FaSearch size={15} className="searchLink" />
        </CardSearch>
      </TopHolder>

      <DecksContainer>
        {inputValue !== ''
          ? singleDeckCards &&
            singleDeckCards.map(card => {
              return (
                card && (
                  <DeckCard
                    key={card.id}
                    card={card}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                )
              );
            })
          : cards &&
            cards.map(card => {
              return (
                card && (
                  <DeckCard
                    key={card.id}
                    card={card}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                )
              );
            })}
      </DecksContainer>
    </Collection>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps)(Decks);
