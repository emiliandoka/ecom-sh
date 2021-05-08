
import React from 'react';
import './App.css';
import {Switch , Route, Redirect } from 'react-router-dom';
import {Homepage} from './pages/homepage/homepage.com';
import Shoppage from './pages/shop/shop.comp';
import Header from './components/header/header';
import Signinout from './pages/sign in out/sign-in-out';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentuser} from '../src/redux/user/user.action'
class App extends React.Component {

  unsubscribefromAuth = null;

  componentDidMount(){
  const {setCurrentuser} = this.props;

    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          setCurrentuser({
              id : snapshot.id,
              ...snapshot.data()
            
          }, ()=>{console.log(this.state);});
        });
        
      }else{ 
        setCurrentuser(userAuth);
      }
      
     
    })
  }
  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render(){
      return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact  path='/shop' component={Shoppage}/>
        <Route exact path='/login' render={()=> this.props.currentUser ? (<Redirect to="/"/>) : <Signinout/>}/>
      </Switch>

    </div>
  );
  }

}
const mapStatetoProps = ({user})=>({
    currentUser : user.currentUser
})

const mapDispatchtoProps = dispatch =>({
  setCurrentuser : user => dispatch(setCurrentuser(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
