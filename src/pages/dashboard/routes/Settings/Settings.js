import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RoundedImage from 'react-rounded-image';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdCloudUpload } from 'react-icons/md';
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

export const TopLeftBottomContainer = styled.div`
  margin: 5% auto;
  text-align: center;
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
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const HideDiv2 = styled(InnerContainer).attrs({
  className: 'mobileDiv2',
})`
  &.mobileDiv2 {
    @media (min-width: 850px) {
      display: none;
    }
  }
`;

const ProfileInnerContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;

export default function Settings() {
  const { credentials } = useSelector(state => state.user);
  const logoutUser = useAction(action.logoutUser);
  const history = useHistory();
  const onLogout = e => {
    e.preventDefault();
    logoutUser(history);
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleButtonClick1 = () => {
    setOpen1(!open1);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };
  const handleButtonClick3 = () => {
    setOpen3(!open3);
  };
  const handleButtonClick4 = () => {
    setOpen4(!open4);
  };
  const handleButtonClick5 = () => {
    setOpen5(!open5);
  };
  const uploadProfileImg = () => {};

  return (
    <Wrapper>
      <TopContainer>
        <ProfileImageDiv>
          <ProfileInnerContainer>
          <RoundedImage
            // eslint-disable-next-line max-len
            image={profileDefault}
            alt="User's profile"
            imageHeight="100"
            imageWidth="100"
            roundedSize="1"
            roundedColor="#FFF"
          />
          <MdCloudUpload size="3.5em" color="grey" onClick={uploadProfileImg} />
          </ProfileInnerContainer>
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
                />
              </IconButtonWrapper>
            </UpperCardSection>
            <MyHR />
            {open1 && <ProfileManagementForm />}
          </InnerContainer>

          <InnerContainer className="mobileDiv2">
            <HideDiv2>
              <UpperCardSection>
                <H1 fontSize="2em" lineHeight="0em">
                  Password Management
                </H1>
                <IconButtonWrapper rotate={open3} onClick={handleButtonClick3}>
                  <MdKeyboardArrowDown
                    size="3.5em"
                    color="grey"
                    onClick={handleButtonClick3}
                  />
                </IconButtonWrapper>
              </UpperCardSection>
              <MyHR />
              {open3 && <PasswordManagementForm />}
            </HideDiv2>
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
                />
              </IconButtonWrapper>
            </UpperCardSection>
            <MyHR />
            {open2 && (
              <>
                <TopLeftBottomContainer>
                  <H2 fontSize="2.5em" color="red" onClick={handleButtonClick5}>
                    Delete Account
                  </H2>
                  {open5 && <AccountManagementForm />}
                </TopLeftBottomContainer>
                <>
                  <UpperCardSection>
                    <H2 fontSize="2em" lineHeight="1em">
                      Version
                    </H2>
                    <P>Beta 0.3.0</P>
                  </UpperCardSection>
                  <H2 color="#3399FF" onClick={handleButtonClick4}>
                    Help Center
                  </H2>
                  {open4 && <HelpCenterForm />}
                </>
              </>
            )}
          </InnerContainer>
          <InnerContainer className="mobileDiv1">
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
          <InnerContainer className="mobileDiv1">
            <HideDiv1>
              <UpperCardSection>
                <H1 fontSize="2em" lineHeight="0em">
                  Password Management
                </H1>
                <IconButtonWrapper rotate={open3} onClick={handleButtonClick3}>
                  <MdKeyboardArrowDown
                    size="3.5em"
                    color="grey"
                    onClick={handleButtonClick3}
                  />
                </IconButtonWrapper>
              </UpperCardSection>
              <MyHR />
              {open3 && <PasswordManagementForm />}
            </HideDiv1>
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
