import React from 'react';
import "./buttonStyles.scss";

export const ButtonComponent = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <div>
            <button className={`${isGoogleSignIn? 'google-sign-in':''} custom-button `}{...otherProps}>
                {children}
            </button>
        </div>
    )
}

