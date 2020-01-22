/* eslint-disable no-prototype-builtins */
// Import

// Libraries
import React, { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router';

// Styled
import { H1, H2, H3 } from '../../styles/typography';
import {
  ParentBackgroundSecondary,
  SkewDivSecondary,
  UnSkewDivSecondary,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';
import { Button, LineButton } from '../../styles/buttons';

// Assets
import BookSVG from '../../assets/images/undraw_book_lover_mkck.svg';

// Components
import LandingCarousel from '../../components/landingCarousel/LandingCarousel';
import { getToken } from '../../utils/auth';
import { googleAuthorized } from '../../modules/user/userActions';
import useAction from '../../utils/useAction';

export default function Landing(props) {
  const { match } = props;
  const history = useHistory();

  const authorizedGoogle = useAction(googleAuthorized);

  useEffect(() => {
    if (match.params.hasOwnProperty('token')) {
      authorizedGoogle(match.params.token);
    }
  }, []);

  return (
    <div>
      {getToken() && <Redirect to="/dashboard" />}
      <FlexRowBackground>
        <DesktopImage>
          <img src={BookSVG} alt="analysis" />
        </DesktopImage>
        <ParentBackgroundSecondary>
          <SkewDivSecondary>
            <UnSkewDivSecondary>
              <H1>Welcome to Quick Decks</H1>
              <H2 REGULAR>Here’s what you’ll be getting into</H2>
              <LandingCarousel />
              <Button
                onClick={() => {
                  history.push('/signup');
                }}
              >
                <H3 WHITE>Sign Up</H3>
              </Button>
              <LineButton
                onClick={() => {
                  history.push('/login');
                }}
              >
                <H3 PRIMARY>Login</H3>
              </LineButton>
            </UnSkewDivSecondary>
          </SkewDivSecondary>
        </ParentBackgroundSecondary>
      </FlexRowBackground>
    </div>
  );
}
