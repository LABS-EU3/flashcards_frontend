import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RoundedImage from 'react-rounded-image';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import useAction from '../../../../utils/useAction';
import * as action from '../../../../modules/user/userActions';

import { H1, H2, H3, P } from '../../../../styles/typography';

import { LogoutButton } from '../../../../styles/buttons';

import ProfileManagementForm from './ProfileManagement';
import PasswordManagementForm from './PasswordManagement';
import AccountManagementForm from './AccountManagement';
import HelpCenterForm from './HelpCenter';
import { ProfileImageDiv } from '../../styles/DashboardStyles';
import profileDefault from '../../../../assets/user_profile_default.jpg';

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
export const InnerContainer = styled.div`
  margin: 30px auto;
`;

const IconButtonWrapper = styled.div`
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

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const HideDiv1 = styled(InnerContainer).attrs({
  className: 'mobileDiv1',
})`
  &.mobileDiv1 {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const HideDiv2 = styled(InnerContainer).attrs({
  className: 'mobileDiv2',
})`
  &.mobileDiv2 {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

// const RBCONTAINER = styled(RightBottomContainer).attrs({
//   className: 'rbContainer',
// })`
//   &.rbContainer {
//     /* align-self: flex-start; */
//   }
// `;
export default function Settings() {
  const { credentials } = useSelector(state => state.user);
  console.log('ccc', credentials.full_name);
  const logoutUser = useAction(action.logoutUser);
  const history = useHistory();
  const onLogout = e => {
    e.preventDefault();
    logoutUser(history);
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleButtonClick1 = () => {
    setOpen1(!open1);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };
  const handleButtonClick3 = () => {
    setOpen3(!open3);
  };

  const mql = window.matchMedia(`(max-width: 768px)`);
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      window.location.reload();
    }, 1500);
  });

  useEffect(() => {
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen1(!open1) : setOpen1(open1);
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen2(!open2) : setOpen2(open2);
  }, [mql.matches]);
  return (
    // <div>
    //   <h1>Settings</h1>
    //   <NavLink to="/login" onClick={onLogout}>
    //     Logout
    //   </NavLink>
    // </div>
    <Wrapper>
      <TopContainer>
        {/* <h1>Settings</h1>
         */}
        <ProfileImageDiv>
          <RoundedImage
            // eslint-disable-next-line max-len
            image={profileDefault}
            alt="User's profile"
            imageHeight="100"
            imageWidth="100"
            roundedSize="1"
            roundedColor="#FFF"
          />

          <H1>{credentials.full_name}</H1>
          <P>{credentials.email}</P>
        </ProfileImageDiv>
      </TopContainer>

      <BottomContainer>
        <LeftBottomContainer>
          <InnerContainer>
            <UpperCardSection>
              <H1 fontSize="2em" lineHeight="1em">
                Profile Management
              </H1>
              <IconButtonWrapper rotate={open1} onClick={handleButtonClick1}>
                <MdKeyboardArrowDown
                  size="3.5em"
                  color="grey"
                  onClick={handleButtonClick1}
                  className="material-icons"
                />
              </IconButtonWrapper>
            </UpperCardSection>
            <MyHR />
            {open1 && <ProfileManagementForm />}
          </InnerContainer>
          <InnerContainer>
            <UpperCardSection>
              <H1 fontSize="2em" lineHeight="1em">
                Account Management
              </H1>
              <IconButtonWrapper rotate={open2} onClick={handleButtonClick2}>
                <MdKeyboardArrowDown
                  size="3.5em"
                  color="grey"
                  onClick={handleButtonClick2}
                  className="material-icons"
                />
              </IconButtonWrapper>
            </UpperCardSection>
            <MyHR />
            {open2 && <AccountManagementForm />}
          </InnerContainer>
          <InnerContainer className="mobileDiv1">
            <H2 fontSize="3em" color="red">
              Delete Account
            </H2>
            {/* <UpperCardSection>
              <H2 fontSize="2em" lineHeight="1em">
                Version
              </H2>
              <P>Beta 0.3.0</P>
            </UpperCardSection> */}
            {/* <H2 color="#3399FF">Help Center</H2> */}
            <HideDiv1>
              <LogoutButton>
                <StyledLink to="/login" onClick={onLogout}>
                  <H3 color="#444140">Log Out</H3>
                </StyledLink>
              </LogoutButton>
            </HideDiv1>
          </InnerContainer>
        </LeftBottomContainer>

        <RightBottomContainer>
          <InnerContainer>
            <UpperCardSection>
              <H1 fontSize="2em" lineHeight="0em">
                Password Management
              </H1>
              <IconButtonWrapper rotate={open3} onClick={handleButtonClick3}>
                <MdKeyboardArrowDown
                  size="3.5em"
                  color="grey"
                  onClick={handleButtonClick3}
                  className="material-icons"
                />
              </IconButtonWrapper>
            </UpperCardSection>
            <MyHR />
            {open3 && <PasswordManagementForm />}
          </InnerContainer>

          <InnerContainer>
            <UpperCardSection>
              <H2 fontSize="2em" lineHeight="1em">
                Version
              </H2>
              <P>Beta 0.3.0</P>
            </UpperCardSection>
            <HelpCenterForm />
          </InnerContainer>
          <InnerContainer className="mobileDiv2">
            <HideDiv2>
              <LogoutButton>
                <StyledLink to="/login" onClick={onLogout}>
                  <H3 color="#444140">Log Out</H3>
                </StyledLink>
              </LogoutButton>
            </HideDiv2>
          </InnerContainer>
        </RightBottomContainer>
      </BottomContainer>
    </Wrapper>
  );
}
