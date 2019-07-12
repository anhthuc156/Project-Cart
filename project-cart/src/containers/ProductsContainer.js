import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Products from '../components/Products';
import Product from '../components/Product';
import ActionCreator from '../actions/ActionCreator';

class ProductsContainer extends React.Component {
    showProduct = (products) => {
        let result = null;
        let { handleAddToCart } = this.props
        if (products.length > 0) {
            result = products.map((product) => {
                return <Product key= {product.id} product={product} handleAddToCart={handleAddToCart}/>
            })
        }
        return result;
    }
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }
}


ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddToCart: (product) => {
            dispatch(ActionCreator.addToCart(product, 1))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
