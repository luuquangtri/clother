import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import "./stripe-button.styles.scss";
// import publicKey from '../../configs/ApiStripe';
function StripeCheckoutButton(props) {
    const { price } = props;
    const priceForStripe = price * 100;
    let publicKey = 'pk_test_51H6foUITQJ6qcfw2Y0MkCJ0GBt50MuefiVJVQcM43e0bXcmzaCQM2iGTEgHNRVG4raQRUJYYqbH15eK78pxVucFf00ppClntlC';
    const onToken = token => {
        console.log(token);

    }
    return (
        <StripeCheckout
            label="Pay now"
            name="CRW Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publicKey}
        />
    );
}

export default StripeCheckoutButton;