/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { TopComponentDiv } from '../../../styles/DeckLibraryStyles';
import { Label, Select } from '../../../../../styles/forms';
import { H3 } from '../../../../../styles/typography';
import {
  Filters,
  SearchBarArea,
  SearchInput,
  IconContainer,
  SearchLabel,
} from '../styles/searchStyles';
import { SelectedTagsContainer } from '../../../../../components/addDeckForm/deckTags/deckTagStyles';
import { GrowSpace } from '../../../../../styles/displayFlex';
import Tag from '../../../../../components/addDeckForm/deckTags/DeckTag';
import { objectPropertyCompare } from '../../../../../utils/comparisionFunctions';
import { ON_DECK_NAME_SEARCH } from '../../../../../modules/dashboard/dashboardTypes';

function TopSearch({ dashboard, decks, updateSiftedDecks }) {
  const { tags } = dashboard;
  const headerSearchBar = window.history.state.state;
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputValue, setInputValue] = useState(headerSearchBar.deckNameValue);
  const [isPublic, setIsPublic] = useState(true);
  const removeTag = tag => {
    const remainingTags = selectedTags.filter(t => t.id !== tag.id);
    setSelectedTags(remainingTags);
  };

  const addTag = tagName => {
    const wholeTag = tags.find(t => t.name === tagName);
    const hasDuplicateTagsList = [...selectedTags, wholeTag];
    const newTagsList = objectPropertyCompare(hasDuplicateTagsList, 'id');
    setSelectedTags(newTagsList);
  };

  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };

  const filterFunction = async () => {
    let siftedThroughDecks;
    const filteredDecks = await decks.filter(deck =>
      deck.deck_name.toUpperCase().match(inputValue.toUpperCase()),
    );
    siftedThroughDecks = filteredDecks;
    if (selectedTags.length > 0) {
      const tagOrganized = await siftedThroughDecks.map(deck =>
        deck.tags.filter(deckTag => {
          return selectedTags.some(selectTag => {
            return selectTag.name === deckTag;
          });
        }),
      );
      siftedThroughDecks =
        selectedTags.length > 0
          ? await tagOrganized
              .map((deck, idx) => (deck.length > 0 ? decks[idx] : null))
              .filter(value => {
                if (value !== null) {
                  if (selectedTags.length > 0) {
                    const results = selectedTags
                      .map(tag => tag.name)
                      .map(tag => value.tags.includes(tag));
                    return results.reduce((a, b) => a && b);
                  }
                  return value.tags.includes(selectedTags.name);
                }
                return false;
              })
          : siftedThroughDecks;
    }
    if (isPublic === false) {
      siftedThroughDecks = await siftedThroughDecks.filter(deck => {
        return deck.public === (`${isPublic}` === 'true');
      });
    }
    if (isPublic === true) {
      siftedThroughDecks = await siftedThroughDecks.filter(
        deck => deck.public === (`${isPublic}` === 'true'),
      );
    }

    return updateSiftedDecks(siftedThroughDecks);
  };

  useEffect(() => {
    filterFunction();
  }, [selectedTags, inputValue, isPublic]);

  return (
    <TopComponentDiv>
      <SearchBarArea>
        <SearchLabel>
          <SearchInput
            name="search"
            placeholder="Search Quick Decks"
            onChange={e => {
              handleSearchChange(e);
              filterFunction();
            }}
            value={inputValue}
          />
          <IconContainer>
            <FaSearch size={15} />
          </IconContainer>
        </SearchLabel>
        <Filters>
          <Label>
            <H3>Type Of Deck</H3>
            <Select
              placeholder="Private or Public"
              type="text"
              name="isPublic"
              onChange={e => {
                setIsPublic(e.target.value === 'true');
                filterFunction();
              }}
            >
              <option value="true">Public</option>
              <option value="false">Private</option>
            </Select>
          </Label>
          <Label>
            <H3>Tags</H3>
            <Select
              placeholder="Select Tags"
              type="text"
              name="tag"
              onChange={e => {
                addTag(e.target.value);
                filterFunction();
              }}
            >
              {tags.map(t => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
            </Select>
          </Label>
        </Filters>
        <SelectedTagsContainer>
          {selectedTags
            ? selectedTags.map(
                s => s && <Tag key={s.id} value={s} removeTag={removeTag} />,
              )
            : ''}
        </SelectedTagsContainer>
        <GrowSpace flexGrow="2" />
      </SearchBarArea>
    </TopComponentDiv>
  );
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSiftedDecks: filteredDecks => {
      dispatch({ type: ON_DECK_NAME_SEARCH, payload: filteredDecks });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSearch);
