import React from 'react';
import { Link } from 'react-router-dom';
import "./headerComponentStyles.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";



export const HeaderComponent = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/signin">
                    CONTACT
                </Link>
                {
                    //ternary operator for our sign Out button.
                    currentUser 
                    ? <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to="/signin">SIGN IN</Link>
                     
                }
            </div>     
        </div>
    )
}
