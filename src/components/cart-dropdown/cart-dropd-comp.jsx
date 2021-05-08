import React from "react";
import './cart-dropd.style.scss';
import {connect} from 'react-redux';
import CustomButton from "../custom-button/custom-button.com";
import CartItem from '../cart-item/cart-item.comp';

const cartDropd = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.map(cartItem=> (<CartItem hey={cartItem.id} item={cartItem} /> ))
           } 
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) =>({
    cartItems
})


export default connect(mapStateToProps)(cartDropd);