import styled from 'styled-components';
import { Input, Label } from '../../../../../styles/forms';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  label {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const SearchBarArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6em;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

export const SearchInput = styled(Input)`
  width: 70%;
`;

export const IconContainer = styled.div`
  background: transparent;
  color: rgba(68, 65, 64, 0.5);
  position: relative;
  left: -3em;
  top: -0.5em;
`;

export const SearchLabel = styled(Label)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
