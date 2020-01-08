import React from 'react';
import styled from 'styled-components';

// styled
import { H1, P } from '../../styles/typography';

export default function Cards({ title, category }) {
  return (
    <CardsFlex>
      <H1>{title}</H1>
      <P>{category}</P>
    </CardsFlex>
  );
}

export const CardsFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1 px solid black;
  box-sizing: border-box;
  box-shadow: 0 px 4 px 10 px rgba(0, 0, 0, 0.02);
`;

// export const FlexCardRow = styled.div `
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   max-height: 95.4vh;
//   overflow: hidden;
//   width: 100%;
//   background-color: ${c.LIGHT_NEUTRAL_COLOR};
//   @media (min-width: ${g.phoneMediaBreak}px) {
//     justify-content: center;
//     align-items: center;
//   }
//   @media (min-width: ${g.desktopMediaBreak}px) {
//     justify-content: space-between;
//   }
// `;
