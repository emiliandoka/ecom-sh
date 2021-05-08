import React from 'react';
import './sign-in-out.style.scss';
import SingIn from '../../components/sign in/signin.comp';
import Signup from '../../components/sign-up/sign-up.comp'
const Signiout= ()=>(

    <div className="sign-in-out">
       <SingIn/>
       <Signup/>
    </div>
)

export default Signiout;