import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  margin-top: 30px;
  @media (max-width: 900px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  width: 95%;
  @media (min-width: 1500px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const Card = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 98%;
  height: 60px;
  margin-top: 5%;
  padding-left: 2%;
  padding-bottom: 2%;
  background-color: white;
  border-radius: 5px;
`;

export const UpperCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SLowerCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SLower = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;

export const MLower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: -4%;
`;

export const RecentlyViewContainer = styled.div`
  margin: 10px 10px 10px 20px;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SessionContainer = styled.div`
  align-self: flex-start;
  margin: 10px 10px 10px 5px;
  width: 100%;
`;

export const MasteryContainer = styled.div`
  margin: 10px 10px 10px 20px;
  width: 100%;
`;

export const CardContainer = styled.div`
  /* display: none; */
`;

export const StyledMyPart = styled(CardContainer).attrs({
  className: 'container',
})`
  &.container {
    /* display: none; */
  }
`;

export const BUTTON = styled.button`
  height: 40px;
  border: none;
  outline: none;
  background: #ffa987;
  border-radius: 3px;
  cursor: pointer;
`;

export const MyHR = styled.hr`
  width: 98%;
  height: 1px;
  margin-left: 0;
  border: 0;
  background: linear-gradient(
    88.85deg,
    rgba(210, 31, 60, 0.5) 38.43%,
    rgba(255, 169, 135, 0.5) 136.86%
  );
`;

export const IconButtonWrapper = styled.div`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate ? `rotate(180deg)` : '')};
`;
