// Import

// Libraries
import React, { useEffect } from 'react';

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
  const confirmEmail = useAction(emailConfirmation);

  useEffect(() => {
    if (props.match.params.token) {
      confirmEmail(props.match.params.token, props.history);
    }
  }, [props, confirmEmail]);

  return (
    <FlexRowBackground>
      <DesktopImage>
        <img src={`${LoadSVG}`} alt="knowledagble person" />{' '}
      </DesktopImage>
      <ParentBackground>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>
            <FlexColumnSpaceBetween>
              <H1 REGULAR>Welcome to QuickDeck</H1>
              <H3 LIGHTWEIGHT>Your Email Confirmation was successful! </H3>
              <H3 LIGHTWEIGHT>Kindly wait while we log you in</H3>
              <br />
            </FlexColumnSpaceBetween>
          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>
    </FlexRowBackground>
  );
}
