import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useAction from '../../../../../utils/useAction';
import * as action from '../../../../../modules/dashboard/dashboardActions';
import * as types from '../../../../../modules/dashboard/dashboardTypes';
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

export default function DecksConfirmation({ selectedDecks, setIsEditMode }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteDeck = useAction(action.deleteDeck);
  return (
    <DeleteContainer>
      <H1 className="confrimationQuestion">
        Are you sure you would like to delete these decks?
      </H1>
      <LineButton
        type="button"
        onClick={async () => {
          await selectedDecks.forEach(deck => {
            deleteDeck(deck);
          });
          await setIsEditMode(false);
          await dispatch({ type: types.ON_DELETE_CONFIRMATION_SUCCESS });
          await history.push('/dashboard/library');
        }}
      >
        <H2 PRIMARY>Confirm</H2>
      </LineButton>
    </DeleteContainer>
  );
}
