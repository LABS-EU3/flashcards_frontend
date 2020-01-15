import React from 'react';
import styled from 'styled-components';

// styled
import { P, H2 } from '../../styles/typography';
import * as c from '../../styles/variables/colours';
import * as g from '../../styles/variables/global';

export default function Cards({ title, category }) {
  return (
    <CardsFlex>
      <H2 BOLD>{title}</H2>
      <P>{category}</P>
    </CardsFlex>
  );
}

export const CardsFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  /* margin: 10px 20px 1 0px 20px; */
  padding-left: 10px;
  border: 1px solid ${c.LIGHT_NEUTRAL_COLOR};
  box-sizing: border-box;
  background: white;
  justify-content: space-between;
  width: ${props => props.width || null};
  margin-top: ${props => props.marginTop || '10px'};
  margin-right: ${props => props.marginRight || '20px'};
  margin-bottom: ${props => props.marginBottom || '10px'};
  margin-left: ${props => props.marginLeft || '20px'};
  box-shadow: 0px 4px 10px lightgray;
  border-radius: 5px;

  @media (max-width: ${g.phoneMediaBreak}px) {
    width: 85% !important;
  }

  a {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
  //   background: linear-gradient(
  //     88.85deg,
  //     rgba(210, 31, 60, 0.5) 38.43%,
  //     rgba(255, 169, 135, 0.5) 136.86%
  //   );
`;
