import React from 'react';
import styled from 'styled-components';
import { MdCollectionsBookmark } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

// styled
import { P, H2 } from '../../styles/typography';
import * as c from '../../styles/variables/colours';
import * as g from '../../styles/variables/global';
import { SLower } from '../../pages/dashboard/routes/StudyMode/StudyModeStyles';

export default function Cards({ title, totalCard }) {
  return (
    <CardsFlex>
      <InfoHolder>
        <H2 BOLD>{title}</H2>
        {/* <P>{public}</P> */}
      </InfoHolder>
      <CardCount>
        <P color="grey">{totalCard} Cards </P>
        <NavLink to="/dashboard/study">
          <MdCollectionsBookmark
            size="2em"
            color="grey"
            className="studyIcon"
          />
        </NavLink>
      </CardCount>
    </CardsFlex>
  );
}

export const CardCount = styled(SLower)`
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 30%;
  float: left;
  .studyIcon {
    visibility: hidden;
  }
  button {
    background: inherit;
    border: none;
  }
`;
export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardsFlex = styled.div`
  display: flex;
  align-items: left;
  padding-left: 1em;
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
    .hover {
      h2 {
        visibility: visible;
      }
    }
  }
`;
