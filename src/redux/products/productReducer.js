import { FoodItems } from '../../data/data';

const INITIAL_STATE = {
  foods: FoodItems,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
