import React from 'react';
import styled from 'styled-components';

import * as c from '../../styles/variables/colours';
import * as g from '../../styles/variables/global';

export const LightPop = props => {
  const { children, type } = props;
  return <PinkButton type={type}>{children}</PinkButton>;
};

const PinkButton = styled.button`
  background: ${c.SECONDARY_POP_COLOR};
  border-radius: 3px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  align-content: center;

  @media (min-width: ${g.phoneMediaBreak}px) {
    width: 120%;
    margin-left: -10%;
    height: 40px;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 1%;
    align-items: center;
  }
`;

export default LightPop;
