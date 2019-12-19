// Import

// Libraries
import React from 'react';

// Styled
import { H1, H5, P } from '../../styles/typography';
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
import ExclaimationMark from '../../assets/icons/noun_attention_61745 1.svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';
import StudyingSVG from '../../assets/images/undraw_studying_s3l7.svg';

// components
import ResetPasswordForm from '../../components/resetForm/ResetPasswordForm';

export default function ResetPassword() {
  return (
    <FlexRowBackground>
      <DesktopImage>
        <img src={`${StudyingSVG}`} alt="studying person" />
      </DesktopImage>
      <ParentBackground>
        <BackArrowButton>
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <FlexColumnSpaceBetween>
              <img src={`${ExclaimationMark}`} alt="question mark icon" />
              <H1 REGULAR>Reset Password</H1>
              <P LIGHTWEIGHT>
                Please create your new password. If did not request to reset
                your password please disregard this.{' '}
              </P>
              <br />
              <ResetPasswordForm />
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
