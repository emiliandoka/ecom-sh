import React from "react";
import './sign-up.style.scss';
import {auth , createUserProfileDocument} from '../../firebase/firebase.util';
import Forminput from "../form input/form-inp.comp";
import Custombtn from "../custom-button/custom-button.com";


export default class Signup extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email : '',
            password : '',
            confirmpass : ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const{displayName , email , password , confirmpass } = this.state;

        if(password !== confirmpass){
            alert('pass dont match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email , password) ;
            createUserProfileDocument(user , {displayName})
            this.setState({
                displayName: '',
                email : '',
                password : '',
                confirmpass : ''
            });

        }catch(err){
            console.log(err);
        }
        

    }
    Handlechange = (event) =>{
            const {name , value} = event.target;
            this.setState({[name]:value});
        }
    render(){
        const{displayName , email , password , confirmpass } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sing up with your email and password</span>

                <form onSubmit={this.handleSubmit} className="signup-form">

                    <Forminput type="text" name='displayName' value={displayName} handleChange={this.Handlechange} label='Display Name' required ></Forminput>
                    <Forminput type="email" name='email' value={email} handleChange={this.Handlechange} label='Email' required ></Forminput>
                    <Forminput type="password" name='password' value={password} handleChange={this.Handlechange} label='Password' required ></Forminput>
                    <Forminput type="password" name='confirmpass' value={confirmpass} handleChange={this.Handlechange} label='Confirm Password' required ></Forminput>
                    <Custombtn type="submit" >Sing Up</Custombtn>
                </form>
            </div>
        )
    }

}