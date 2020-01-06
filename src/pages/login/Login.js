// Imports

// Libraries
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

// Styles
import { H1, H3, H5 } from '../../styles/typography';
import { BackArrowButton } from '../../styles/buttons';
import {
  ParentBackground,
  SkewDiv,
  UnSkewDiv,
  BottomTriangle,
  TopTriangle,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';

// Assets
import img from '../../assets/images/undraw_online_test_gba7 (1).svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';

// Components
import LoginForm from '../../components/loginForm/LoginForm';

// Types
import { CLEAR_RESPONSES } from '../../modules/user/userTypes';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <FlexRowBackground>
      {localStorage.getItem('token') && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img alt="online test" src={img} />
      </DesktopImage>
      <ParentBackground>
        <BackArrowButton
          onClick={() => {
            dispatch({ type: CLEAR_RESPONSES });
            history.goBack();
          }}
        >
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <H1>Login</H1>
            <LoginForm history={history} />
            <br />
            <H3 REGULAR>
              Do not have an account? <NavLink to="/signup">Sign Up</NavLink>
            </H3>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
