// Import

// Library
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getToken } from '../../utils/auth';

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

// Types
import { CLEAR_RESPONSES } from '../../modules/user/userTypes';

const BackArrowButton2 = styled(BackArrowButton)`
  margin-top: -25em;
`;

export default function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <FlexRowBackground>
      {getToken() && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img src={img} alt="analysis" />
      </DesktopImage>
      <ParentBackgroundSecondary>
        <BackArrowButton2
          onClick={() => {
            dispatch({ type: CLEAR_RESPONSES });
            history.goBack();
          }}
        >
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton2>
        <SkewDivSecondary>
          <UnSkewDivSecondary>
            <H1>Create an Account</H1>
            <SignUpForm history={history} />
            <br />
            <H3 REGULAR>
              Already a user?
              <NavLink
                to={{
                  pathname: '/login',
                  state: { errors: null, completed: false },
                }}
              >
                Login
              </NavLink>
            </H3>
          </UnSkewDivSecondary>
        </SkewDivSecondary>
      </ParentBackgroundSecondary>
    </FlexRowBackground>
  );
}
