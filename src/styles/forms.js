// Import

// Libraries
import styled from 'styled-components';

// Fonts
import * as f from './variables/fonts';

// Colours
import * as c from './variables/colours';

export const FormContainer = styled.div`
  text-align: center;
  width: ${props => props.width || '45%'};
  margin: 4% 0;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${props => props.height || null};
`;

// Here you can use the border attribute dynamically
/*

  <Input 
    border={errors.email && '1px solid ${c.DANGER_COLOR}'}; 
    type="text" 
    name="email" 
    placeholder="Email" 
  />

*/

export const Input = styled.input`
  background: #fffefe;
  border: ${props => props.border || '1px solid rgba(0, 0, 0, 0.3)'};
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  color: ${c.DARK_NEUTRAL_COLOR};
  font-family: ${f.APP_FONT};
  font-weight: ${f.REGULAR};
  font-size: ${f.H3_FONT_SIZE}em;
  line-height: ${f.H3_LINE_HEIGHT}em;
  padding: 0.5em;
  margin: 0em 0em 1em 0em;
  &:focus {
    outline: 2px solid ${c.SECONDARY_POP_COLOR};
  }
`;

export const Select = styled.select`
  background: #fffefe;
  border: ${props => props.border || '1px solid rgba(0, 0, 0, 0.3)'};
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  color: ${c.DARK_NEUTRAL_COLOR};
  font-family: ${f.APP_FONT};
  font-weight: ${f.REGULAR};
  font-size: ${f.H3_FONT_SIZE}em;
  line-height: ${f.H3_LINE_HEIGHT}em;
  padding: 0.5em;
  margin: 0em 0em 1em 0em;
  &:focus {
    outline: 2px solid ${c.SECONDARY_POP_COLOR};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  align-items: flex-start;
`;
