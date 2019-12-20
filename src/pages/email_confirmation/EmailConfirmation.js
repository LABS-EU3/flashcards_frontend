// Import

// Libraries
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

// import { Formik } from 'formik';
// import * as Yup from 'yup';

// Styled
import { H1, P } from '../../styles/typography';
// import { Button, BackArrowButton } from '../../styles/buttons';
// import { Form, Input, Label } from '../../styles/forms';
import { FlexColumnSpaceBetween } from '../../styles/displayFlex';
import {
  BottomTriangle,
  ParentBackground,
  TopTriangle,
  SkewDiv,
  UnSkewDiv,
  FlexRowBackground,
  // DesktopImage,
} from '../../styles/background';

// assets
// import QuestionMark from '../../assets/icons/noun_Question_3013473 1.svg';
// import BackArrow from '../../assets/icons/Arrow 1.svg';
// import KnowledgeSVG from '../../assets/undraw/undraw_knowledge_g5gf.svg';

export default function EmailConfirmation() {
  const history = useHistory();
  const tokenFromUrl = useParams();
  console.log('ttttttttttttttttt', tokenFromUrl);
  console.log('historyyyyyyyy', history);
  axios
    .post(
      `https://quickdecks-staging.herokuapp.com/api/auth/confirm`,
      tokenFromUrl,
    )
    .then(res => {
      console.log('confirm response', res);
      history.push('/dashboard');
    });

  return (
    <FlexRowBackground>
      {/* <DesktopImage>
        <img src={`${KnowledgeSVG}`} alt="back arrow" />
      </DesktopImage> */}
      <ParentBackground>
        {/* <BackArrowButton>
          <img src={`${BackArrow}`} alt="back arrow" />
          <H5>Back</H5>
        </BackArrowButton> */}
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <FlexColumnSpaceBetween>
              {/* <img src={`${QuestionMark}`} alt="question mark icon" /> */}
              <H1 REGULAR>Welcome to QuickDeck</H1>
              <P LIGHTWEIGHT>Your Email EmailConfirmation was successful! </P>
              <br />
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
