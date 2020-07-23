import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crow.svg';
import { auth } from '../../firebase/firebase.utils';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import CardIcon from '../cart-icon/cart-icon.component';
import "./header.styles.scss";

function Header(props) {
    const currentUser = useSelector(state => state.user.currentUser);
    const hidden = useSelector(state => state.cart.hidden);
    // console.log(currentUser);

    const signOut = () => {
        if (window.confirm("bạn có chắc chắn đăng xuất tài khoản ?")) {
            auth.signOut();
        }

    }
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                {
                    currentUser ?
                        (
                            <div className="option sign">
                                <span>{currentUser.displayName}</span>
                                <div className="sign-out" onClick={signOut}>
                                    SIGN OUT
                                </div>
                            </div>
                        )
                        :
                        (<Link to="/signin" className="option" >SIGN IN</Link>)
                }
                <CardIcon />

            </div>
            {hidden && <CardDropdown />}

        </div>
    );
}


export default Header;