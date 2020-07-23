import React from 'react';
import "./cart-item.styles.scss";
function CartItem(props) {
    const { cartItem } = props;
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;