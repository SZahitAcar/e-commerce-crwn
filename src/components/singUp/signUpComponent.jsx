import React from "react";

import {FormInputComponent} from "../formInput/FormInputComponent"
import {ButtonComponent} from "../button/ButtonComponent"

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"

import "./signUpStyles.scss"

class SignUpComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert("Passwords don't match!");
            return
        } 

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            
            createUserProfileDocument(user,{displayName})

            this.setState({ 
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""});

        }catch(error){
            console.error(error);
        }
    }
    handleChange = event => {
        const{name, value} = event.target;
        
        this.setState({[name]: value});
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state

        return(
            <div className="sign-up">
                <h2 className="title"> I do not have a account</h2>
                <span> Sign up with yout email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInputComponent 
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
                >
                </FormInputComponent>

                <FormInputComponent 
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
                >
                </FormInputComponent>

                <FormInputComponent
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
                >
                </FormInputComponent>

                <FormInputComponent
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
                >
                </FormInputComponent>

                <ButtonComponent type="submit"> Sign Up</ButtonComponent>
                </form>
               
        </div>
        )  
    }

}
export default SignUpComponent;