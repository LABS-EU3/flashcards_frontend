import React from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

import { StyledModal, ModalInner } from './modalStyles';
import { H2 } from '../../styles/typography';
import { WHITE } from '../../styles/variables/colours';

export default function FancyModal(props) {
  const { isOpen, afterOpen, toggleModal, children } = props;
  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <FancyH2 onClick={toggleModal}>
        <MdClose size="1.6em" color={WHITE} />
      </FancyH2>
      <ModalInner>{children}</ModalInner>
    </StyledModal>
  );
}

const FancyH2 = styled(H2)`
  align-self: flex-end;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;
