import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import "./checkout-page.styles.scss"
function CheckoutPage(props) {
    const cartItems = useSelector(state => state.cart.cartItems);
    let total = cartItems.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.quantity * cartItem.price
    }, 0)

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className="total">
                <span>TOTAL: $
                    {total}
                </span>
            </div>

            <StripeCheckoutButton price={total} />
        </div>
    );
}

export default CheckoutPage;