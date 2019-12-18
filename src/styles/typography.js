// Import

// Libraries
import styled from 'styled-components';

// Fonts
import * as f from './variables/fonts';

// Colours
import * as c from './variables/colours';

// Example use <H1 white></H1> | <H1 black></H1>
// renders h1 with the perspective color font
// Please keep lines 60 characters per line on desktop
// and 30-40 characters per line on mobile

export const H1 = styled.h1`
  font-family: ${f.APP_FONT};
  font-weight: ${f.BOLD};
  font-size: ${f.H1_FONT_SIZE}em;
  line-height: ${f.H1_LINE_HEIGHT}em;
  color: ${c.DARK_NEUTRAL_COLOR};

  ${props => (props.BRAND ? `font-family:${f.BRAND_FONT}` : null)};

  ${props => (props.LIGHT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.WHITE ? `color:#FFFFFF` : null)};
  ${props => (props.PRIMARY ? `color:${c.PRIMARY_POP_COLOR}` : null)};
`;

// Used mostly for the Nav Bar
export const H2 = styled.h2`
  font-family: ${f.APP_FONT};
  font-weight: ${f.BOLD};
  font-size: ${f.H2_FONT_SIZE}em;
  line-height: ${f.H2_LINE_HEIGHT}em;
  color: ${c.DARK_NEUTRAL_COLOR};

  ${props => (props.BRAND ? `font-family:${f.BRAND_FONT}` : null)};

  ${props => (props.LIGHT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.WHITE ? `color:#FFFFFF` : null)};
  ${props => (props.PRIMARY ? `color:${c.PRIMARY_POP_COLOR}` : null)};
`;

export const H3 = styled.h3`
  font-family: ${f.APP_FONT};
  font-weight: ${f.BOLD};
  font-size: ${f.H3_FONT_SIZE}em;
  line-height: ${f.H3_LINE_HEIGHT}em;
  color: ${c.DARK_NEUTRAL_COLOR};

  ${props => (props.BRAND ? `font-family:${f.BRAND_FONT}` : null)};

  ${props => (props.LIGHT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.WHITE ? `color:#FFFFFF` : null)};
  ${props => (props.PRIMARY ? `color:${c.PRIMARY_POP_COLOR}` : null)};
`;

export const H4 = styled.h4`
  font-family: ${f.APP_FONT};
  font-weight: ${f.BOLD};
  font-size: ${f.H4_FONT_SIZE}em;
  line-height: ${f.H4_LINE_HEIGHT}em;
  color: ${c.DARK_NEUTRAL_COLOR};

  ${props => (props.BRAND ? `font-family:${f.BRAND_FONT}` : null)};

  ${props => (props.LIGHT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.INPUT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.WHITE ? `color:#FFFFFF` : null)};
  ${props => (props.PRIMARY ? `color:${c.PRIMARY_POP_COLOR}` : null)};
`;

export const H5 = styled.h5`
  font-family: ${f.APP_FONT};
  font-weight: ${f.BOLD};
  font-size: ${f.H5_FONT_SIZE}em;
  line-height: ${f.H5_LINE_HEIGHT}em;
  color: ${c.DARK_NEUTRAL_COLOR};

  ${props => (props.BRAND ? `font-family:${f.BRAND_FONT}` : null)};

  ${props => (props.LIGHT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.WHITE ? `color:#FFFFFF` : null)};
  ${props => (props.PRIMARY ? `color:${c.PRIMARY_POP_COLOR}` : null)};
`;

export const P = styled.p`
  font-family: ${f.APP_FONT};
  font-weight: ${f.REGULAR};
  font-size: ${f.P_FONT_SIZE}em;
  line-height: ${f.P_LINE_HEIGHT}em;
  color: ${c.DARK_NEUTRAL_COLOR};

  ${props => (props.BRAND ? `font-family:${f.BRAND_FONT}` : null)};
  ${props => (props.LIGHTWEIGHT ? `font-weight:${f.LIGHT}` : null)};

  ${props => (props.LIGHT ? `color:${c.LIGHT_NEUTRAL_COLOR}` : null)};
  ${props => (props.WHITE ? `color:#FFFFFF` : null)};
  ${props => (props.PRIMARY ? `color:${c.PRIMARY_POP_COLOR}` : null)};
`;
