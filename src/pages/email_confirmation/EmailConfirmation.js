// Import

// Libraries
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { SquareLoader } from 'react-spinners';

import { getToken } from '../../utils/auth';

// Actions
import { emailConfirmation } from '../../modules/user/userActions';

// Helpers
import useAction from '../../utils/useAction';

// Styled
import { H1, H3 } from '../../styles/typography';
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

// Asset
import LoadSVG from '../../assets/images/undraw_Load_more_2yd7.svg';

export default function EmailConfirmation(props) {
  const { history, match } = props;

  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState();

  const confirmEmail = useAction(emailConfirmation);
  const user = useSelector(state => state.user);

  useEffect(
    () => {
      if (!confirm) {
        confirmEmail(match.params.token, history);
        setConfirm(true);
      }

      if (user.loading) {
        setResponse(
          <H3 LIGHTWEIGHT>Kindly wait while we confirm your account</H3>,
        );
      } else if (user.errors) {
        setResponse(
          <H3 LIGHTWEIGHT>
            Oops something happened! <br />
            Please contact customer service
          </H3>,
        );
      } else {
        setResponse(
          <H3 LIGHTWEIGHT>
            Confirmation successful! <br />
            Please wait to be redirected!
          </H3>,
        );
      }
    }, // eslint-disable-next-line
    [confirm, user.loading, user.errors],
  );

  return (
    <FlexRowBackground>
      {getToken() && <Redirect to="/dashboard" />}
      <DesktopImage>
        <img src={`${LoadSVG}`} alt="knowledagble person" />{' '}
      </DesktopImage>
      <ParentBackground>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <FlexColumnSpaceBetween>
              <H1 REGULAR>Welcome to QuickDeck</H1>
              {response}
              <SquareLoader
                css={{ marginLeft: '20px' }}
                size={15}
                color="#FFA987"
                loading={user.loading}
              />
              <br />
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
