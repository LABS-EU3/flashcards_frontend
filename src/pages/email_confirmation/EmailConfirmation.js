// Import

// Libraries
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

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

import KnowledgeSVG from '../../assets/images/undraw_knowledge_g5gf.svg';

export default function EmailConfirmation() {
  const history = useHistory();
  const tokenFromUrl = useParams();
  console.log('token from url', tokenFromUrl);
  console.log('history', history);
  axios
    .post(
      `https://quickdecks-staging.herokuapp.com/api/auth/confirm`,
      tokenFromUrl,
    )
    .then(res => {
      console.log('confirm response', res);
      history.push('/dashboard');
    })
    .catch(err => {
      console.log('error request', err.request);
      console.log('error response', err.response);
      return err.response;
    });

  return (
    <FlexRowBackground>
      <DesktopImage>
        <img src={`${KnowledgeSVG}`} alt="knowledagble person" />{' '}
      </DesktopImage>
      <ParentBackground>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <FlexColumnSpaceBetween>
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
