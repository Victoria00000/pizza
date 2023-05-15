export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const RMV_ITEM = 'RMV_ITEM';
export const rmvItem = (item) => ({
  type: RMV_ITEM,
  payload: item,
});

export const CLEAR_CART = 'CLEAR_CART';
export const clearCart = (item) => ({
  type: CLEAR_CART,
  payload: item,
});
