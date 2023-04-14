export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
