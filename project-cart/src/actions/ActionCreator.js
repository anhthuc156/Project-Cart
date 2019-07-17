import { ADD_TO_CART, CHANGE_MESSAGE, DELETE_PRODUCT_IN_CART } from '../constants/ActionTypes';

export default {
    addToCart: (product, quantity) => ({
        type: ADD_TO_CART,
        product,
        quantity
    }),
    changeMessage: (message) => ({
        type: CHANGE_MESSAGE,
        message
    }),
    removeProductInCart: (product) => ({
        type: DELETE_PRODUCT_IN_CART,
        product
    })
}