import styled from 'styled-components';
import * as c from '../../styles/variables/colours';
import { CardsFlexs } from '../../pages/dashboard/styles/DeckLibraryStyles';

export const MainPage = styled.div`
  width: 100%;
  background: transparent;
`;

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const WelcomeMessage = styled.div`
  h1 {
    position: absolute;
    right: 30px;
    top: 0px;
  }
`;

export const Image = styled.div`
  width: 12em;
  height: 12em;
  position: relative;
  margin-top: -9em;
  margin-left: 3em;

  img {
    display: inline-block;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #444140;
  }

  h1 {
    position: relative;
    top: -3.5em;
    left: 6em;
    white-space: nowrap;
  }
`;

/* profile main section */

export const MainSection = styled.div`
  margin-top: 2%;
  margin-right: 2em;
  margin-left: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  h3 {
    text-align: center;
  }
`;

/* Content */
export const Content = styled.div`
  flex-basis: 45%;
  background: #ffffff;
  margin-bottom: 3%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1%;
`;

export const ProfileDecks = styled(CardsFlexs)`
  width: 100%;
`;

export const Tag = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  padding: 0.5em;
  margin: 0.3em;
  border-radius: 2px;
`;

export const Tags = styled.div`
  padding: 0.2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 10px;
  border: 1px solid ${c.LIGHT_NEUTRAL_COLOR};
  box-sizing: border-box;
  background: white;
  width: ${props => props.width || null};
  margin-top: ${props => props.marginTop || '10px'};
  margin-right: ${props => props.marginRight || '20px'};
  margin-bottom: ${props => props.marginBottom || '10px'};
  margin-left: ${props => props.marginLeft || '20px'};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  &:hover {
    cursor: pointer;
  }
  z-index: 1;
`;
