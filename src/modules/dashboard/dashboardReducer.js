import * as types from './dashboardTypes';
import deckTags from '../../utils/deckTags';

const initialState = {
  loading: false,
  errors: null,
  recentCards: {},
  creatingDeck: false,
  creatingCard: false,
  deleteingCard: false,
  isUpdatingCard: false,
  userDecks: [],
  singleDeckCards: [],
  selectedTags: [],
  selectedDeck: {},
  selectedCard: {},
  tags: deckTags,
  showingAnswers: false,
  showMenu: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECENT_CARDS_START:
      return {
        ...state,
        loading: true,
      };

    case types.RECENT_CARDS_SUCCESS:
      return {
        ...state,
        loading: true,
        recentCards: action.payload,
      };

    case types.RECENT_CARDS_FAILED:
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

    case types.ON_DECK_CREATION_CANCELLED:
      return {
        ...state,
        creatingDeck: false,
        loading: false,
        errors: action.payload || {},
      };

    case types.ON_DECK_CREATION_COMPLETE:
      return {
        ...state,
        userDecks: [...state.userDecks, action.payload],
        creatingDeck: false,
        loading: false,
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

    case types.TOGGLE_ANSWERS:
      return {
        ...state,
        showingAnswers:
          action.payload != null ? action.payload : !state.showingAnswers,
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

    default:
      return state;
  }
};

export default dashboardReducer;
