import React from 'react';
import styled from 'styled-components';

import * as c from '../../styles/variables/colours';

export const LightPop = props => {
  const { children } = props;
  return <PinkButton>{children}</PinkButton>;
};

const PinkButton = styled.button`
  background: ${c.SECONDARY_POP_COLOR};
  border-radius: 3px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default LightPop;
