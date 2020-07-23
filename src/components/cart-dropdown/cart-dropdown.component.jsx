import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import "./cart-dropdown.styles.scss";
function CardDropdown(props) {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(history);
    const goCheckOut = () => {
        history.push("/checkout");
        const action = toggleCartHidden();
        dispatch(action);
    }
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        )))
                        :
                        (<span className="cart-empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={() => goCheckOut()}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CardDropdown;