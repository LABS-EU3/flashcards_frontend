import React from 'react';
import { MdClose } from 'react-icons/md';

import { TagContainer } from './deckTagStyles';
import { H2 } from '../../../styles/typography';

const Tag = props => {
  const { value, removeTag } = props;
  return (
    <TagContainer onClick={() => removeTag(value)}>
      <H2
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        <MdClose style={{ verticalAlign: 'middle' }} /> {value}
      </H2>
    </TagContainer>
  );
};

export default Tag;
