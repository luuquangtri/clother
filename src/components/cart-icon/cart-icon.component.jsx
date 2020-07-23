import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import "./cart-icon.styles.scss";
function CardIcon() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch();
    const toggleCart = () => {
        const action = toggleCartHidden();
        dispatch(action);
    }
    return (
        <div className="cart-icon" onClick={toggleCart} >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">
                {
                    cartItems.reduce((accmulatedQuantity, cartItem) => {
                        return accmulatedQuantity + cartItem.quantity
                    }, 0)
                }
            </span>
        </div>
    );
}

export default CardIcon;