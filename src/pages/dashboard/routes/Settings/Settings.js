import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RoundedImage from 'react-rounded-image';
import { MdKeyboardArrowDown, MdCloudUpload } from 'react-icons/md';
import useAction from '../../../../utils/useAction';
import * as action from '../../../../modules/user/userActions';

import { H1, H2, H3, P } from '../../../../styles/typography';

import { LogoutButton } from '../../../../styles/buttons';

import ProfileManagementForm from './SettingsForms/ProfileManagement';
import PasswordManagementForm from './SettingsForms/PasswordManagement';
import AccountManagementForm from './SettingsForms/AccountManagement';
import HelpCenterForm from './SettingsForms/HelpCenter';
import { ProfileImageDiv } from '../../styles/DashboardStyles';
import profileDefault from '../../../../assets/user_profile_default.jpg';

import { openUploadWidget } from '../../../../utils/CloudinaryService';

import {
  BottomContainer,
  Cursor,
  Cursor2,
  HideDiv1,
  HideDiv2,
  IconButtonWrapper,
  InnerContainer,
  LeftBottomContainer,
  MyHR,
  ProfileInnerContainer,
  RightBottomContainer,
  StyledLink,
  TopContainer,
  TopLeftBottomContainer,
  UpperCardSection,
  Wrapper,
} from './SettingsStyles';

export default function Settings() {
  const { credentials } = useSelector(state => state.user);
  const imgUrl = useSelector(state => state.user.credentials.image_url);

  const uploadProfileImg = useAction(action.uploadProfileImg);
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

  const loadProfileImg = () => {
    openUploadWidget(
      ['an', 'array'],
      'flashcard_front_13',
      error => {
        // eslint-disable-next-line no-console
        console.log(error);
      },
      // eslint-disable-next-line camelcase
      imageUrl => {
        uploadProfileImg(imageUrl);
      },
    );
  };

  return (
    <Wrapper>
      <TopContainer>
        <ProfileImageDiv>
          <ProfileInnerContainer>
            <RoundedImage
              // eslint-disable-next-line max-len
              image={imgUrl || profileDefault}
              alt="User's profile"
              imageHeight="100"
              imageWidth="100"
              roundedSize="1"
              roundedColor="#FFF"
            />
            <MdCloudUpload size="3.5em" color="grey" onClick={loadProfileImg} />
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
                  <H2 onClick={handleButtonClick5} className="cursor">
                    <Cursor>Delete Account</Cursor>
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
                  <H2 onClick={handleButtonClick4} className="cursor2">
                    <Cursor2>Help Center</Cursor2>
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
