import { SET_CURRENT_USER, TOGGLE_MENU_HIDDEN } from './userAction';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        hiddenMenu: true,
      };

    case TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    default:
      return state;
  }
};
