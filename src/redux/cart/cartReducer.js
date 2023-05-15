import {
  ADD_ITEM,
  CLEAR_CART,
  RMV_ITEM,
  TOGGLE_CART_HIDDEN,
} from './cartActions';
import { addItemToCart, remvItemToCart } from './cartUtils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case RMV_ITEM:
      return {
        ...state,
        cartItems: remvItemToCart(state.cartItems, action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
