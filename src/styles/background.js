// Import

// Library
import styled from 'styled-components';

// Styles
import * as c from './variables/colours';

export const ParentBackground = styled.div`
  background: ${c.LIGHT_NEUTRAL_COLOR};
  min-width: 320px;
  min-height: 524px;
  max-width: 517px;
  max-height: 656px;
  z-index: -1;
`;

export const SkewDiv = styled.div`
  background-color: #ffffff;
  -webkit-transform: skewY(-16.27deg);
  -moz-transform: skewY(-16.27deg);
  -ms-transform: skewY(-16.27deg);
  -o-transform: skewY(-16.27deg);
  transform: skewY(-16.27deg);
  z-index: 1;
`;

export const UnSkewDiv = styled.div`
  -webkit-transform: skewY(16.27deg);
  -moz-transform: skewY(16.27deg);
  -ms-transform: skewY(16.27deg);
  -o-transform: skewY(16.27deg);
  transform: skewY(16.27deg);
  z-index: 2;
`;
