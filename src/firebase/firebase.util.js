import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';




  const config = {
    apiKey: "AIzaSyCgrLxpBwAG3UB4yCaK3JS8n-qcSNNEJQ8",
    authDomain: "ecom-db-8b8b4.firebaseapp.com",
    projectId: "ecom-db-8b8b4",
    storageBucket: "ecom-db-8b8b4.appspot.com",
    messagingSenderId: "720860510770",
    appId: "1:720860510770:web:24056f30259610b2f4da2b",
    measurementId: "G-90L332Z8J5"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) =>{

    if(!userAuth){
      return;
    }
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapshot = await userRef.get();
     
    if(!snapshot.exists){
      const displayName= userAuth.displayName;
      const email = userAuth.email
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
           email ,
            createdAt ,
             ...additionalData
        })
      }catch(err){
        console.log('error creating user', err.message);
      }
    }

    return userRef;

    /*
const snapShot = await userRef.get();
    
    
    */
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const Signinwithgoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;