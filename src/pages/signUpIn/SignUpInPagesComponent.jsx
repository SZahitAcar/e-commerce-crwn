import React from 'react';
import SignInComponent from '../../components/singIn/SignInComponent';
import "./signUpInPageStyles.scss";
import SignUpComponent from "../../components/singUp/SignUpComponent";


export const SignUpInPagesComponent = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignInComponent/>
            <SignUpComponent/>
        </div>
    )
}
