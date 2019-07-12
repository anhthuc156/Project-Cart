import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import { MSG_CART_EMPTY } from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';


class CartContainer extends React.Component {
    showCartItem = (cart) => {
        var result = MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index}/>
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart= {cart} />
        }
        return result;
    }
    render() {
        let { cart } = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
}


CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
        
    
}
const mapStateToProps = state => {
    return {
       cart: state.cart
    }
}
export default connect(mapStateToProps, null)(CartContainer);
