import React from 'react';
import './singin.style.scss';

import Forminput from '../form input/form-inp.comp';
import Custombtn from '../custom-button/custom-button.com';

import {auth , Signinwithgoogle} from '../../firebase/firebase.util';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handlesubmit = async (event)=>{
        event.preventDefault();

        const {email , pass} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email , pass); 
            this.setState({email:'', password: ''});
        }catch(err){
            console.log(err);
        }

        
        
    }
    handlechange = (e)=>{
        const {name , value} = e.target;
        this.setState({[name] : value});
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span> Sign in with your email and passsword</span>


                <form onSubmit={this.handlesubmit}>
                    
                    <Forminput type="email" name="email" label="Email" handleChange={this.handlechange} value={this.state.email} required />
                    <Forminput type="password" name="password" label="Password" handleChange={this.handlechange} value={this.state.password} required/>
                    <div className="buttons">
                        <Custombtn type="submit" children="Sign In"/>
                        <Custombtn onClick={Signinwithgoogle} isGooglesignin children="Sign In with google"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;