import React from 'react';
import { MdCollectionsBookmark } from 'react-icons/md';
import { Card, SLowerCardSection, SLower } from './styles';
import { H2, P } from '../../styles/typography';

const CardItem = ({ cardsLeft, library, title }) => {
  return (
    <Card>
      <H2>{title}</H2>
      <SLowerCardSection>
        <P>{library}</P>
        <SLower>
          <P color="grey">{cardsLeft}</P>
          <MdCollectionsBookmark size="2em" color="grey" />
        </SLower>
      </SLowerCardSection>
    </Card>
  );
};

export default CardItem;
