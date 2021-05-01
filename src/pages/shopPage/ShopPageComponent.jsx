import React, { Component } from 'react';
import PreViewComponent from '../../components/preView/PreViewComponent';
import SHOP_DATA from "./shopData";


export default class ShopPageComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...otherProps}) => (
                        <PreViewComponent key={id} {...otherProps}/>
                    ))
                }     
            </div>
        )
    }
}
