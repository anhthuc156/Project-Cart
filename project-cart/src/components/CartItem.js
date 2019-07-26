import React from 'react';
import { MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS } from '../constants/Message';

class CartItem extends React.Component {
    
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    handleDelete = (product) => {
        const { handleDelete, handleChangeMessage } = this.props;
        handleDelete(product);
        handleChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    handleUpdateQuantity = (product,quantity) => {
        if (quantity > 0) {
            const { handleUpdateInCart, handleChangeMessage } = this.props;
            handleUpdateInCart(product,quantity);
            handleChangeMessage(MSG_UPDATE_CART_SUCCESS)
        }
    }

    render() {
        const { item } = this.props;
        const { quantity } = item;
        return (
            <tr>
                <th scope="row">
                    <img src= {item.product.image}
                        alt="item.product.name" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => {this.handleUpdateQuantity(item.product, item.quantity - 1)}}
                             className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label onClick={() => {this.handleUpdateQuantity(item.product, item.quantity + 1)}}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button onClick={() => this.handleDelete(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

export default CartItem;
