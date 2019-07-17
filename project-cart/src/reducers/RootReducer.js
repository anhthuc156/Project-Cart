import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import MessageReducer from './MessageReducer';

const RootReducer = combineReducers({
    products: ProductReducer,
    cart: CartReducer,
    message: MessageReducer
})

export default RootReducer;