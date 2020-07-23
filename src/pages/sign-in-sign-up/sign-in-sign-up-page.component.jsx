import React from 'react';
import "./sign-in-sign-up.styles.scss";
import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/sign-up.component';
function SignInSignUpPage(props) {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInSignUpPage;