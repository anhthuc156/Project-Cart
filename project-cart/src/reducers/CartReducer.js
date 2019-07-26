import { ADD_TO_CART, DELETE_PRODUCT_IN_CART, UPDATE_PRODUCT_IN_CART } from "../constants/ActionTypes";
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];
function findProductInCart(cart, product)  {
    let index = -1;
    if (cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}


const CartReducer = (state= initialState, action) => {
    const { product, quantity} = action;
    var index = -1;
    switch (action.type) {
        case ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
            
        case DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];

        case UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
            
        default:
            return [...state];
    }
}

export default CartReducer;