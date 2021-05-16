import React, { Component } from 'react';
import { ButtonComponent } from '../button/ButtonComponent';
import { FormInputComponent } from '../formInput/FormInputComponent';
import "./signInStyles.scss";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignInComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        };
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"", password: ""})
        }catch(error) {
            console.log(error)
        }


        this.setState({email: "", password: ""})
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>
                    I already have an account.
                </h2>
                <span>
                    Sign in with your email and password.
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent label="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange}  required />
                    
                    <FormInputComponent  label="Password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
                    
                <div className="buttons">
                    <ButtonComponent type="submit" onSubmit={this.handleSubmit} > SIGN IN</ButtonComponent>
                    <ButtonComponent  onClick={signInWithGoogle} isGoogleSignIn >
                        SIGN IN WITH GOOGLE
                    </ButtonComponent>
                </div>
                </form>
                
            </div>
        )
    }
}
