import React from 'react';

import { StyledModal, ModalInner } from './modalStyles';

export default function FancyModal(props) {
  const { isOpen, afterOpen, toggleModal, children } = props;
  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <ModalInner>{children}</ModalInner>
    </StyledModal>
  );
}
