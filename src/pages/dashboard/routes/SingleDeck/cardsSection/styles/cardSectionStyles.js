import styled from 'styled-components';

import { DARK_NEUTRAL_COLOR } from '../../../../../../styles/variables/colours';

import { Search } from '../../../../../../components/SearchBox/styles';

export const TopHolder = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${DARK_NEUTRAL_COLOR};
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const CardSearch = styled(Search)`
  padding: 0em;
  position: relative;
  border: none;
  right: 0;
  top: 0em;
  max-width: 50em;
  min-width: 25em;
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  input {
    width: 150%;
    height: 25%;
  }
  .searchLink {
    position: relative;
    bottom: 2em;
    left: 5em;
  }
  @media (max-width: 768px) {
    align-items: center;
    align-self: center;
    input {
      display: block;
      margin-bottom: 3em;
    }
    .searchLink {
      position: relative;
      bottom: 2em;
      left: 5em;
    }
  }
`;
