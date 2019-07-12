var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41DvAKt7CaL._SL1024_.jpg',
        description: 'Apple san xuat',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png',
        description: 'Apple san xuat',
        price: 300,
        inventory: 14,
        rating: 4
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://www.buymobiles.net/library/images/handsets/apple/apple-iphone-x-64gb-space-grey_1.png',
        description: 'Apple san xuat',
        price: 250,
        inventory: 5,
        rating: 5
    }
]

const ProductReducer = (state= initialState, action) => {
    switch (action.type) {
        
        default:
            return [...state];
    }
}

export default ProductReducer;