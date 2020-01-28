import React from 'react';
import styled from 'styled-components';
import { MdCollectionsBookmark } from 'react-icons/md';

// styled
import { P, H2 } from '../../styles/typography';
import * as c from '../../styles/variables/colours';
import * as g from '../../styles/variables/global';
import { SLower } from '../../pages/dashboard/routes/StudyMode/StudyMode';

export default function Cards({ title, category, totalCard }) {
  return (
    <CardsFlex>
      <InfoHolder>
        <H2 BOLD>{title}</H2>
        <P>{category}</P>
      </InfoHolder>
      <CardCount>
        <P color="grey">{totalCard} Cards </P>
        <MdCollectionsBookmark size="2em" color="grey" className="studyIcon" />
      </CardCount>
    </CardsFlex>
  );
}

const CardCount = styled(SLower)`
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: relative;
  margin-left: 0.5em;
  .studyIcon {
    visibility: hidden;
  }
`;
const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardsFlex = styled.div`
  display: flex;
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
  height: ${props => props.height || null};
  box-shadow: 0px 4px 10px lightgray;
  border-radius: 5px;

  @media (max-width: ${g.desktopMediaBreak}px) {
    width: 85% !important;
  }

  a {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    .studyIcon {
      visibility: visible;
    }
  }
`;
