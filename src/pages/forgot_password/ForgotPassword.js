// Import

// Libraries
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Styled
import { H1, H3, P, H5 } from '../../styles/typography';
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
import QuestionMark from '../../assets/icons/noun_Question_3013473 1.svg';
import BackArrow from '../../assets/icons/Arrow 1.svg';
import KnowledgeSVG from '../../assets/images/undraw_knowledge_g5gf.svg';

export default function ForgotPassword() {
  return (
    <FlexRowBackground>
      <DesktopImage>
        <img src={`${KnowledgeSVG}`} alt="back arrow" />
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
              <img src={`${QuestionMark}`} alt="question mark icon" />
              <H1 REGULAR>Forgot Password</H1>
              <P LIGHTWEIGHT>
                Enter your email linked to your account. An message will be sent
                to your email to reset your password{' '}
              </P>
              <br />
              <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .lowercase()
                    .email('Invalid email address')
                    .required('Email is required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  // Send Email Function
                  setSubmitting(false);
                  resetForm();
                }}
              >
                <Form>
                  <Label>
                    <H3>Email</H3>
                    <Input type="text" name="email" placeholder="Email" />{' '}
                  </Label>
                  <Button>
                    <H3 WHITE>Send Email</H3>
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
