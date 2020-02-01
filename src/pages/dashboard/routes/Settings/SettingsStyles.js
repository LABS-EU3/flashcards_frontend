import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { H2 } from '../../../../styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
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

export const UpperCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// export const SessionContainer = styled.div`
export const LeftBottomContainer = styled.div`
  align-self: flex-start;
  margin: 10px 10px 10px 5px;
  width: 100%;
`;

// export const MasteryContainer = styled.div`
export const RightBottomContainer = styled.div`
  margin: 10px 10px 10px 20px;
  width: 100%;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: unset;
  }
`;

export const TopLeftBottomContainer = styled.div`
  margin: 5% auto;
  text-align: center;
`;

export const InnerContainer = styled.div`
  margin: 30px auto;
`;

export const IconButtonWrapper = styled.div`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate ? `rotate(180deg)` : '')};
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

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const HideDiv1 = styled(InnerContainer).attrs({
  className: 'mobileDiv1',
})`
  &.mobileDiv1 {
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

export const HideDiv2 = styled(InnerContainer).attrs({
  className: 'mobileDiv2',
})`
  &.mobileDiv2 {
    @media (min-width: 850px) {
      display: none;
    }
  }
`;

export const Cursor = styled(H2).attrs({
  className: 'cursor',
})`
  &.cursor {
    font-size: 1.5em;
    color: red;
    cursor: pointer;
  }
`;
export const Cursor2 = styled(H2).attrs({
  className: 'cursor2',
})`
  &.cursor2 {
    font-size: 1em;
    color: #3399ff;
    cursor: pointer;
  }
`;

export const ProfileInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
