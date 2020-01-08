// Import

// Libraries
import React from 'react';
import { useHistory, Redirect } from 'react-router';

import { getToken } from '../../utils/auth';

// Styled
import { H1, P } from '../../styles/typography';
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
import ExclaimationMark from '../../assets/icons/noun_attention_61745 1.svg';
import StudyingSVG from '../../assets/images/undraw_studying_s3l7.svg';

// components
import ResetPasswordForm from '../../components/resetForm/ResetPasswordForm';

export default function ResetPassword({ match }) {
  const history = useHistory();
  return (
    <FlexRowBackground>
      {getToken() && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img src={`${StudyingSVG}`} alt="studying person" />
      </DesktopImage>
      <ParentBackground>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <FlexColumnSpaceBetween>
              <img src={`${ExclaimationMark}`} alt="question mark icon" />
              <H1>Reset Password</H1>
              <P LIGHTWEIGHT>
                Please create your new password. If did not request to reset
                your password please disregard this.{' '}
              </P>
              <br />
              <ResetPasswordForm
                history={history}
                resetToken={match.params.token}
              />
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
