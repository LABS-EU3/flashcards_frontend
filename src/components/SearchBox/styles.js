import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1.5rem;
  border-radius: 8px;
  border: 1px solid #f6f1f0;
  padding: 0.4em 0.8em;

  @media (max-width: 768px) {
    border: none;

    input {
      display: none;
    }
  }

  button {
    border-radius: 0 3px 3px 0;
    background: transparent;
    color: rgba(68, 65, 64, 0.5);
    font-family: 'Lato';
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const NavSearch = styled.div``;

export const Input = styled.input`
  border: none;
  outline: none;
  box-shadow: none;
  flex: 1;
  font-weight: bold;
  font-size: 1.5em;
`;
