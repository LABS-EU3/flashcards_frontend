// Import

// Library
import styled from 'styled-components';

// Styles
import * as c from './variables/colours';

// Assests
import topTriangle from '../assets/topTriangle.svg';
import bottomTriangle from '../assets/bottomTriangle.svg';

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${c.LIGHT_NEUTRAL_COLOR};
  min-width: 320px;
  min-height: 524px;
  max-width: 517px;
  max-height: 656px;
  z-index: -1;
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
  z-index: 1;
  height: 75vh;
`;

export const UnSkewDiv = styled.div`
  -webkit-transform: skewY(16.27deg);
  -moz-transform: skewY(16.27deg);
  -ms-transform: skewY(16.27deg);
  -o-transform: skewY(16.27deg);
  transform: skewY(16.27deg);
  z-index: 2;
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
