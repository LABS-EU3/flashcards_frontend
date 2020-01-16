import styled from 'styled-components';
import * as c from '../../styles/variables/colours';

export const MainPage = styled.div`
  background: #fff;
  width: 100%;
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
  h2 {
    font-size: 24px;
    color: #444140;
    font-weight: bold;
    position: absolute;
    right: 30px;
    top: 50px;
  }
`;

export const Image = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  margin-top: -90px;
  margin-left: 30px;

  img {
    display: inline-block;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #444140;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    top: 45%;
    left: 120%;
    color: #f6f1f0;
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
  }
`;

/* Content */
export const Content = styled.div`
  flex-basis: 45%;
  margin-bottom: 3%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1%;
  font-size: 12px;
  h1 {
    font-weight: bold;
    font-size: 24px;
    font-family: 'Lato';
    line-height: 29px;
    color: #444140;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid pink;
    margin-bottom: 0.5em;
  }

  span {
    text-align: center;
    margin-top: 0.7em;
    font-size: 1.6rem;
    display: block;
  }
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
  padding-right: 0.5em
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
`;

export const Card = styled.div`
  display: flex;
  font-size: 16px;
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
`;
