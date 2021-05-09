import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon from "../cart-icon/cart.icon.comp";
import CartDropd from "../cart-dropdown/cart-dropd-comp";
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from "../../redux/cart/ccart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";


const Header = ({currentUser, hidden})=>(
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/about">About</Link>

            {
            currentUser ? <div className="option" onClick={()=>auth.signOut()}>Sign Out</div> : <Link className="option" to="/login">Log In</Link>
            }
            
            <CartIcon/>
            {hidden ? null : <CartDropd/>}
            
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default  connect(mapStateToProps)(Header);