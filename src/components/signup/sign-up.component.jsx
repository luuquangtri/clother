
import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import "./sign-up.styles.scss";



class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            displayName: "",
            configPassword: ""
        }
    }
    handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, configPassword, displayName } = this.state;
        if (password !== configPassword) {
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                email: "",
                password: "",
                displayName: "",
                configPassword: ""
            })
        } catch (error) {
            console.log(error);

        }
    }
    render() {
        const { email, password, configPassword, displayName } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display name"
                        required
                    />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="configPassword"
                        value={configPassword}
                        onChange={this.handleChange}
                        label="Config password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;

