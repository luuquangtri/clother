import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import "./sign-in.styles.scss";

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error);

        }
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="text"
                        handleChange={this.handleChange}
                        value={email}
                        label="Email"

                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}



export default SignIn;