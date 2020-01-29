/* eslint-disable max-len */
import React, { useState } from 'react';
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
import { deckTags } from '../../../../../utils/deckTags';

export default function TopSearch() {
  const tags = deckTags;
  const [selectedTags] = useState();
  return (
    <TopComponentDiv>
      <SearchBarArea>
        <SearchLabel>
          <SearchInput name="search" placeholder="Search Quick Decks" />
          <IconContainer>
            <FaSearch size={15} />
          </IconContainer>
        </SearchLabel>
        <Filters>
          <Label>
            <H3>Type Of Deck</H3>
            <Select placeholder="Private or Public" type="text" name="isPublic">
              <option value="true">Public</option>
              <option value="false">Private</option>
            </Select>
          </Label>
          <Label>
            <H3>Tags</H3>
            <Select placeholder="Select Tags" type="text" name="tag">
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
            ? selectedTags.map(s => s && <Tag key={s.id} value={s} />)
            : ''}
        </SelectedTagsContainer>
        <GrowSpace flexGrow="2" />
      </SearchBarArea>
    </TopComponentDiv>
  );
}
