// Import

// Libraries
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

// Styled
import { H1, H3, H5 } from '../../styles/typography';
import { Button, BackArrowButton } from '../../styles/buttons';
import { Form, Input, Label } from '../../styles/forms';
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
import StudyingSVG from '../../assets/undraw/undraw_studying_s3l7.svg';

export default function ResetPassword() {
  const ResetPasswordImage = styled(DesktopImage)``;
  return (
    <FlexRowBackground>
      <ResetPasswordImage>
        <img src={`${StudyingSVG}`} alt="back arrow" />
      </ResetPasswordImage>
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
              <br />
              <Formik
                initialValues={{
                  password: '',
                  passwordconfirm: '',
                }}
                validationSchema={Yup.object({
                  password: Yup.string()
                    .min(8, 'new password needs to be at least 8 characters')
                    .required('New password is required'),
                  passwordconfirm: Yup.string()
                    .oneOf(
                      [Yup.ref('password'), null],
                      'Passwords do not match',
                    )
                    .required('Please confirm your new password'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  // Send Reset Password function
                  setSubmitting(false);
                  resetForm();
                }}
              >
                <Form>
                  <Label>
                    <H3>Password</H3>
                    <Input
                      type="text"
                      name=" password"
                      placeholder="Password"
                    />{' '}
                  </Label>
                  <Label>
                    <H3>Re-Enter Password</H3>
                    <Input
                      type="text"
                      name=" passwordconfirm"
                      placeholder="Re-Enter Password"
                    />{' '}
                  </Label>
                  <Button>
                    <H3 WHITE>Confirm</H3>
                  </Button>
                </Form>
              </Formik>
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
