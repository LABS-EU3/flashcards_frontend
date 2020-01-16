import React from 'react';

import { MdDelete, MdEdit } from 'react-icons/md';
import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
  IconWithoutText,
  LibraryActions,
} from '../../../styles/DeckLibraryStyles';

const Decks = ({ cards, deleteCard }) => {
  const handleDelete = card => {
    deleteCard(card);
  };

  return (
    <Collection>
      <CollectionLabel>
        <H1>Cards</H1>
        <HR />
      </CollectionLabel>

      <DecksContainer>
        {cards &&
          cards.map(card => {
            return (
              <CardsFlex width="46%" marginLeft="0" marginRight="0">
                <H2 BOLD>{card.question}</H2>
                <P>{card.answer}</P>
                <LibraryActions>
                  <IconWithoutText
                    onClick={() => {
                      handleDelete(card);
                    }}
                  >
                    <H2>
                      <MdDelete />
                    </H2>
                  </IconWithoutText>
                  <IconWithoutText>
                    <H2>
                      <MdEdit />
                    </H2>
                  </IconWithoutText>
                </LibraryActions>
              </CardsFlex>
            );
          })}
      </DecksContainer>
    </Collection>
  );
};

export default Decks;
