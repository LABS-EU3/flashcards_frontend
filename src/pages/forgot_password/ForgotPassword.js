// Import

// Libraries
import React from 'react';
import { useHistory, Redirect } from 'react-router';
import { useDispatch } from 'react-redux';

import { getToken } from '../../utils/auth';
// Styled
import { H1, P, H5 } from '../../styles/typography';
import { BackArrowButton } from '../../styles/buttons';
import { FlexColumnSpaceBetween } from '../../styles/displayFlex';
import {
  BottomTriangle,
  ParentBackground,
  TopTriangle,
  SkewDiv,
  UnSkewDiv,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';

// assets
import QuestionMark from '../../assets/icons/noun_Question_3013473 1.svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';
import KnowledgeSVG from '../../assets/images/undraw_knowledge_g5gf.svg';

// Components
import ForgetPasswordForm from '../../components/forgetForm/ForgetPasswordForm';

// types
import { CLEAR_RESPONSES } from '../../modules/user/userTypes';

export default function ForgotPassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <FlexRowBackground>
      {getToken() && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img src={`${KnowledgeSVG}`} alt="knowledagble person" />
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
            <FlexColumnSpaceBetween>
              <img src={`${QuestionMark}`} alt="question mark icon" />
              <H1 id="forgotPasswordTitle">Forgot Password</H1>
              <P LIGHTWEIGHT id="forgotPasswordText">
                Enter your email linked to your account. A message will be sent
                to your email to reset your password
              </P>
              <br />
              <ForgetPasswordForm history={history} />
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
