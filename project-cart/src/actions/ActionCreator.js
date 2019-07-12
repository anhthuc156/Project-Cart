import { ADD_TO_CART } from '../constants/ActionTypes';

export default {
    addToCart: (product, quantity) => ({
        type: ADD_TO_CART,
        product,
        quantity
    })
}