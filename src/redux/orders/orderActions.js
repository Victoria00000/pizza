import { createOrderDocument } from '../../firebase/firebase.util';
import { v4 as uuidv4 } from 'uuid';

export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const START_ORDER = 'START_ORDER';
export const PURCHASE_INIT = 'PURCHASE_INIT';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';

export const createOrderSuccess = (orderData) => {
  return {
    type: CREATE_ORDER_SUCCESS,
    orderData: orderData,
  };
};

export const createOrderFail = (error) => {
  return {
    type: CREATE_ORDER_FAIL,
    error: error,
  };
};

export const createOrderStart = () => {
  return {
    type: START_ORDER,
  };
};

export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch(createOrderStart());
    try {
      const order = await createOrderDocument({ id: uuidv4(), ...orderData });

      orderRef.onSnapshot((snapShot) => {
        dispatch(createOrderSuccess({ id: snapShot.id, ...snapShot.data() }));
      });

      dispatch(createOrderSuccess(order));
    } catch (error) {
      dispatch(createOrderFail(error));
    }
  };
};
