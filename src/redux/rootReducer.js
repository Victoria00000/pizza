import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartReducer';
import productReducer from './products/productReducer';
import categoriesReducer from './categories/categoriesReducer';
import { userReducer } from './user/userReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
