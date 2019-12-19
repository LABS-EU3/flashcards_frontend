// Import

// Libraries
import React from 'react';
// import { NavLink } from 'react-router-dom';

// Styled
import { H1 } from '../../styles/typography';
import {
  ParentBackgroundSecondary,
  SkewDivSecondary,
  UnSkewDivSecondary,
  FlexRowBackground,
  DesktopImage,
} from '../../styles/background';

// Assets
import BookSVG from '../../assets/images/undraw_book_lover_mkck.svg';

export default function Landing() {
  return (
    <div>
      <FlexRowBackground>
        <DesktopImage>
          <img src={BookSVG} alt="analysis" />
        </DesktopImage>
        <ParentBackgroundSecondary>
          <SkewDivSecondary>
            <UnSkewDivSecondary>
              <H1>Create an Account</H1>
            </UnSkewDivSecondary>
          </SkewDivSecondary>
        </ParentBackgroundSecondary>
      </FlexRowBackground>
    </div>
  );
}
