import React from 'react';
import "./custom-button.styles.scss";
function CustomButton(props) {
    const { children, isGoogleSignIn, inverted, ...ortherProps } = props;
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sig-in' : ''} custom-button`} {...ortherProps}>
            {props.children}
        </button>
    );
}

export default CustomButton;