import { ADD_TO_CART } from "../constants/ActionTypes";
//var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41DvAKt7CaL._SL1024_.jpg',
            description: 'Apple san xuat',
            price: 500,
            inventory: 10,
            rating: 3
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Iphone X',
            image: 'https://www.buymobiles.net/library/images/handsets/apple/apple-iphone-x-64gb-space-grey_1.png',
            description: 'Apple san xuat',
            price: 250,
            inventory: 5,
            rating: 5
        },
        quantity: 3
    }
];

const CartReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action);
            return [...state];
        default:
            return [...state];
    }
}

export default CartReducer;