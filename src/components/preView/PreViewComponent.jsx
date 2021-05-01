import React from "react";
import { CollectionItem } from "../collectionItem/CollectionItem";

import "./preViewComponentStyle.scss";

const PreViewComponent = ({title, items}) => 
(
    <div className= "collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx)=> idx < 4)
                .map(({id, ...otherProps})=>(
                    <CollectionItem key={id} {...otherProps}></CollectionItem>
                ))
            }
        </div>
    </div>
)

export default PreViewComponent;