// Import

// Library
import styled from 'styled-components';

// Styles
import * as c from './variables/colours';
import * as g from './variables/global';

// Assests
import topTriangle from '../assets/topTriangle.svg';
import bottomTriangle from '../assets/bottomTriangle.svg';

// This file has all you need to create the backgrounds
// including styling the images with responsiveness

// To use this background please follow this format
/*

     <ParentBackground>
        <TopTriangle />
        <SkewDiv>
          <UnSkewDiv>

            <H1>Welcome to Quick Decks!</H1>
            <Button>
              <H3 WHITE>Login</H3>
            </Button>
            <LineButton>
              <H3 PRIMARY>Login</H3>
            </LineButton>

          </UnSkewDiv>
        </SkewDiv>
        <BottomTriangle />
      </ParentBackground>

*/

export const ParentBackground = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${c.LIGHT_NEUTRAL_COLOR};
  min-width: 320px;
  min-height: 524px;
  max-width: 100%;
  max-height: 95.4vh;
  @media (min-width: ${g.phoneMediaBreak}px) {
    min-width: 320px;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    min-width: 500px;
  }
`;

export const SkewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  -webkit-transform: skewY(-16.27deg);
  -moz-transform: skewY(-16.27deg);
  -ms-transform: skewY(-16.27deg);
  -o-transform: skewY(-16.27deg);
  transform: skewY(-16.27deg);
  padding: 2rem;
  min-height: 70vh;
`;

export const UnSkewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transform: skewY(16.27deg);
  -moz-transform: skewY(16.27deg);
  -ms-transform: skewY(16.27deg);
  -o-transform: skewY(16.27deg);
  transform: skewY(16.27deg);
  width: 70%;
`;

export const TopTriangle = styled.div`
  background-image: url(${topTriangle});
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  width: 50%;
  height: 20vh;
  align-self: flex-end;
`;

export const BottomTriangle = styled.div`
  background-image: url(${bottomTriangle});
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  width: 50%;
  height: 30vh;
  align-self: flex-start;
`;

// Create Account and Landing

export const ParentBackgroundSecondary = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(81.25deg, #d21f3c -48.43%, #ffa987 169.92%);
  min-width: 320px;
  min-height: 524px;
  max-width: 100%;
  max-height: 95.4vh;
`;

export const SkewDivSecondary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  -webkit-transform: skewY(16.27deg);
  -moz-transform: skewY(16.27deg);
  -ms-transform: skewY(16.27deg);
  -o-transform: skewY(16.27deg);
  transform: skewY(16.27deg);
  min-height: 75vh;
`;

export const UnSkewDivSecondary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transform: skewY(-16.27deg);
  -moz-transform: skewY(-16.27deg);
  -ms-transform: skewY(-16.27deg);
  -o-transform: skewY(-16.27deg);
  transform: skewY(-16.27deg);
  width: 60%;
`;

// Global

export const FlexRowBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 95.4vh;
  overflow: hidden;
  width: 100%;
  background-color: ${c.LIGHT_NEUTRAL_COLOR};
  @media (min-width: ${g.phoneMediaBreak}px) {
    justify-content: center;
    align-items: center;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    justify-content: space-between;
  }
`;

export const DesktopImage = styled.div`
  min-height: 524px;
  max-height: 92.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-width: 70%;
  img {
    max-height: 90%;
    width: 100%
    margin: 0 auto;
  }
  @media (min-width: ${g.phoneMediaBreak}px){
    display:none;
  }
    @media (min-width: ${g.desktopMediaBreak}px){
    display:flex;
  }
`;
