import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

// eslint-disable-next-line import/prefer-default-export
export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

export const ModalInner = styled.div`
  height: 90%;
  width: 100%;
  background: white;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledModal = Modal.styled`
  width: 40%;
  height: 85%;
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(88.92deg, #D21F3C -6.57%, #FFA987 91.86%);
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
