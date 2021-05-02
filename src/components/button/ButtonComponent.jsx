import React from 'react';
import "./buttonStyles.scss";

export const ButtonComponent = ({children, ...otherProps}) => {
    return (
        <div>
            <button className="custom-button" {...otherProps}>
                {children}
            </button>
        </div>
    )
}
