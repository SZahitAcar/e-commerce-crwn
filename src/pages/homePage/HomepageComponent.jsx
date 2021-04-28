import React from 'react';
import DirectoryComponent from '../../components/directory/DirectoryComponent';
import "../homePage/homepage.styles.scss";

export const HomepageComponent = () => {
    return (
        <div className="homepage">
            <DirectoryComponent/>
        </div>
    )
}
