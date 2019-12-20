// Import

// Library
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import styled from 'styled-components';

// Styles
import { H1, H3, H5 } from '../../styles/typography';
import { BackArrowButton } from '../../styles/buttons';
import {
  ParentBackgroundSecondary,
  SkewDivSecondary,
  UnSkewDivSecondary,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';

// Assets
import img from '../../assets/images/undraw_analysis_4jis.svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';

// Components
import SignUpForm from '../../components/signupForm/SignupForm';

const BackArrowButton2 = styled(BackArrowButton)`
  margin-top: -25em;
`;

export default function SignUp() {
  const history = useHistory();
  return (
    <FlexRowBackground>
      {localStorage.getItem('token') && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img src={img} alt="analysis" />
      </DesktopImage>
      <ParentBackgroundSecondary>
        <BackArrowButton2
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton2>
        <SkewDivSecondary>
          <UnSkewDivSecondary>
            <H1>Create an Account</H1>
            <SignUpForm />
            <br />
            <H3 REGULAR>
              Already a user? <NavLink to="/login">Login</NavLink>
            </H3>
          </UnSkewDivSecondary>
        </SkewDivSecondary>
      </ParentBackgroundSecondary>
    </FlexRowBackground>
  );
}
