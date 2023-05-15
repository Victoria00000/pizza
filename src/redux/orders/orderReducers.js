import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  START_ORDER,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  PURCHASE_INIT,
} from './orderActions';

export const INITIAL_STATE = {
  orders: [],
  loading: false,
  purchased: false,
  error: null,
};

export const osrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_ORDER:
      return {
        ...state,
        loading: true,
        purchased: false,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: [...state.orders, { ...action.orderData }],
      };

    case CREATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        purchased: false,
        error: action.error,
      };

    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };

    default:
      return {
        ...state,
        purchased: false,
      };
  }
};
