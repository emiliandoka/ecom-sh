import React from 'react';
import './checkout.style.scss';
import {connect} from 'react-redux';
import{createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/ccart.selectors';
import ChecoutItem from '../../components/checkout item/checkout.item.copm';
import './checkout.style.scss';
import StripeCheckoutBtn from '../../components/stripe-btn/stripe-btn.comp'
const checkoutPage = ({cartItems,total})=> (
<div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
   {cartItems.map(cartItem=> <ChecoutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div className="total">
        <span>TOTAL: {total} $</span>
    </div>
    <h2 style={{color:'red' , 
        fontWeight:'400',
        letterSpacing: '1px'
    }}>
        Use 4242 4242 4242 4242 to make test payment cw:123</h2>
    <StripeCheckoutBtn price={total}/>
</div>
)
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})
export default connect(mapStateToProps)(checkoutPage);