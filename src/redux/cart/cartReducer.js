import { ADD_ITEM, RMV_ITEM, TOGGLE_CART_HIDDEN } from './cartActions';
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

    default:
      return state;
  }
};

export default cartReducer;
