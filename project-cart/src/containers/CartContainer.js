import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import { MSG_CART_EMPTY } from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import ActionCreator from '../actions/ActionCreator';


class CartContainer extends React.Component {
    
    showCartItem = (cart) => {
    const { handleDelete, handleChangeMessage, handleUpdateInCart } = this.props;
    var result = <tr><td>{MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index}
                            handleDelete={handleDelete} handleChangeMessage={handleChangeMessage} handleUpdateInCart={handleUpdateInCart}/>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleDelete: (product) => {
            dispatch(ActionCreator.removeProductInCart(product))
        },
        handleChangeMessage: (message) => {
            dispatch(ActionCreator.changeMessage(message))
        },
        handleUpdateInCart: (product, quantity) => {
            dispatch(ActionCreator.updateProductInCart(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
