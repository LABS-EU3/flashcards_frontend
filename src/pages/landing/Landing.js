// Import

// Libraries
import React from 'react';
import { useHistory } from 'react-router';

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

export default function Landing() {
  const history = useHistory();

  return (
    <div>
      <FlexRowBackground>
        <DesktopImage>
          <img src={BookSVG} alt="analysis" />
        </DesktopImage>
        <ParentBackgroundSecondary>
          <SkewDivSecondary>
            <UnSkewDivSecondary>
              <H1 REGULAR>Welcome to Quick Decks</H1>
              <H2 REGULAR>Here’s what you’ll be getting into</H2>

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
