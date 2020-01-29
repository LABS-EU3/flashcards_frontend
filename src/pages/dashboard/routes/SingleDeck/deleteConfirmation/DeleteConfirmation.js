import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import useAction from '../../../../../utils/useAction';
import * as action from '../../../../../modules/dashboard/dashboardActions';

import { H1, H2 } from '../../../../../styles/typography';
import { LineButton } from '../../../../../styles/buttons';

const DeleteContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  .confrimationQuestion {
    text-align: center;
  }
`;

export default function DeleteConfirmation({ deckId }) {
  const history = useHistory();
  const deleteDeck = useAction(action.deleteDeck);
  return (
    <DeleteContainer>
      <H1 className="confrimationQuestion">
        Are you sure you would like to delete this deck?
      </H1>
      <LineButton
        type="button"
        onClick={async () => {
          await deleteDeck(deckId);
          await history.push('/dashboard/library');
        }}
      >
        <H2 PRIMARY>Confirm</H2>
      </LineButton>
    </DeleteContainer>
  );
}
