import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeItem, removeItemIfQuantityEqualOne } from '../../redux/cart/cart.action';
import "./checkout-item.styles.scss"
function CheckoutItem(props) {
    const dispatch = useDispatch();
    const { cartItem } = props;
    const { name, price, quantity, imageUrl } = cartItem;
    const removeCartItem = (cartItem) => {
        const action = removeItem(cartItem);
        dispatch(action);
    }
    const handleRemoveItemIfQuantity = (cartItem) => {
        const action = removeItemIfQuantityEqualOne(cartItem);
        dispatch(action);
    }
    const handleAddToCart = (cartItem) => {
        const action = addToCart(cartItem);
        dispatch(action);
    }
    return (
        <div className="checkout-item" >
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => handleRemoveItemIfQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => handleAddToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeCartItem(cartItem)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;