import * as types from './dashboardTypes';
import { deckTags } from '../../utils/deckTags';
import { objectPropertyCompare } from '../../utils/comparisionFunctions';

const initialState = {
  loading: false,
  errors: null,
  recentDecks: [],
  creatingDeck: false,
  creatingCard: false,
  deleteingCard: false,
  isEditingDeck: false,
  isUpdatingCard: false,
  userDecks: [],
  singleDeckCards: [],
  selectedTags: [],
  selectedDeck: {},
  selectedCard: {},
  userSessions: [],
  selectedSession: {},
  sessionCards: [],
  tags: deckTags,
  showMenu: false,
  confirmingDeletion: false,
  allDecks: [],
  siftedDecks: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECENT_DECKS_START:
      return {
        ...state,
        loading: true,
      };

    case types.RECENT_DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        recentDecks: action.payload,
      };

    case types.RECENT_DECKS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case types.ON_START_FETCHING_TAGS:
      return { ...state, loading: true };

    case types.ON_DECK_TAGS_FETCH_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        loading: false,
      };

    case types.ON_DECK_TAGS_FETCH_FAILED:
      return { ...state, loading: false };

    case types.ON_START_CREATING_DECK:
      return { ...state, creatingDeck: true, loading: true };

    case types.ON_START_EDITING_DECK:
      return {
        ...state,
        isEditingDeck: true,
      };

    case types.ON_DECK_CREATION_CANCELLED:
      return {
        ...state,
        creatingDeck: false,
        loading: false,
        isEditingDeck: false,
        errors: action.payload || {},
      };

    case types.ON_DECK_CREATION_COMPLETE:
      return {
        ...state,
        creatingDeck: false,
        isEditingDeck: false,
        loading: false,
        selectedDeck: action.payload,
      };

    case types.SET_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: action.payload,
      };

    case types.CLEAR_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: [],
      };

    case types.ON_START_CREATING_CARD:
      return { ...state, creatingCard: true, loading: true };

    case types.ON_CARD_CREATION_CANCELLED:
      return {
        ...state,
        creatingCard: false,
        loading: false,
        selectedCard: {},
        isUpdatingCard: false,
      };
    case types.ON_CARD_CREATION_COMPLETE:
      return {
        ...state,
        userCards: action.payload,
        creatingCard: false,
        loading: false,
        selectedCard: {},
        isUpdatingCard: false,
      };

    case types.ON_START_FETCHING_CARDS:
      return { ...state, loading: true };

    case types.ON_DECK_CARDS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case types.ON_DECK_CARDS_FETCH_SUCCESS:
      return {
        ...state,
        singleDeckCards: action.payload,
        loading: false,
      };

    case types.ON_SELECT_DECK:
      return {
        ...state,
        loading: true,
        selectedDeck: action.payload,
      };

    case types.ON_GET_SINGLE_DECK_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case types.ON_GET_SINGLE_DECK_SUCCESS:
      return {
        ...state,
        selectedDeck: action.payload.deck,
        loading: false,
      };

    case types.ON_START_FETCHING_DECKS:
      return { ...state, loading: true };

    case types.ON_GET_DECKS_CANCELLED:
      return { ...state, loading: false };

    case types.ON_GET_DECKS_COMPLETE:
      return {
        ...state,
        userDecks: action.payload,
        loading: false,
      };

    case types.ON_DELETE_CARD_SUCCESS:
      return {
        ...state,
        deleteingCard: true,
      };

    case types.ON_UPDATE_CARD_START:
      return {
        ...state,
        isUpdatingCard: true,
        loading: true,
        selectedCard: action.payload,
      };

    case types.HAMBURGER_CLICKED:
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    case types.ON_START_DELETE_DECK:
      return { ...state, loading: true };

    case types.ON_DELETE_DECK_SUCCESS:
      return {
        ...state,
        userDecks: state.userDecks.filter(deck => deck !== state.selectedDeck),
        loading: false,
      };

    case types.ON_DELETE_DECK_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.ON_START_DELETE_CONFIRMATION:
      return { ...state, confirmingDeletion: true, loading: true };

    case types.ON_DELETE_CONFIRMATION_SUCCESS:
      return {
        ...state,
        confirmingDeletion: false,

        loading: false,
      };

    case types.ON_DELETE_CONFIRMATION_CANCELED:
      return {
        ...state,
        loading: false,
        confirmingDeletion: false,
      };

    case types.ON_START_FETCH_SESSIONS:
      return {
        ...state,
        loading: true,
      };

    case types.ON_FETCH_SESSIONS_SUCCESS:
      return {
        ...state,
        loading: true,
        userSessions: action.payload,
      };

    case types.ON_FETCH_SESSIONS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case types.ON_START_FETCH_SINGLE_SESSION:
      return {
        ...state,
        loading: true,
      };

    case types.ON_FETCH_SINGLE_SESSION_SUCCESS:
      return {
        ...state,
        loading: true,
        selectedSession: action.payload,
        // eslint-disable-next-line no-use-before-define
        sessionCards: filterCards(action.payload),
      };

    case types.ON_FETCH_SINGLE_SESSION_FAILED:
      return {
        ...state,
        loading: false,
      };

    case types.ON_START_CREATE_SESSIONS:
      return {
        ...state,
        // loading: true,
      };

    case types.ON_CREATE_SESSIONS_SUCCESS:
      return {
        ...state,
        loading: true,
        selectedSession: action.payload,
      };

    case types.ON_CREATE_SESSIONS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case types.ON_START_CARD_RATING:
      return {
        ...state,
        loading: true,
      };

    case types.ON_CARD_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        sessionCards: state.sessionCards.filter(f => f.id !== action.payload),
      };

    case types.ON_CARD_RATING_FAILED:
      return {
        ...state,
        loading: false,
      };

    case types.ON_START_GET_ALL_DECKS:
      return { ...state, loading: false };

    case types.ON_GET_ALL_DECKS_SUCCESS:
      return {
        ...state,
        allDecks: objectPropertyCompare(
          [...action.payload, ...state.userDecks],
          'deck_id',
        ),
        siftedDecks: objectPropertyCompare(
          [...action.payload, ...state.userDecks],
          'deck_id',
        ),
        loading: false,
      };

    case types.ON_GET_ALL_DECKS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.ON_DECK_NAME_SEARCH:
      return {
        ...state,
        siftedDecks: action.payload,
      };

    default:
      return state;
  }
};

const filterCards = session => {
  const reviewedCardIds = session.reviewed_cards.map(c => (c ? c.id : null));

  const remainingCards = session.flashcards.filter(
    f => f !== null && !reviewedCardIds.includes(f.id),
  );

  return remainingCards;
};

export default dashboardReducer;
