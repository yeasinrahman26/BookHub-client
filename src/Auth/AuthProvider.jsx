import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.init.js'

const googleProvider =new GoogleAuthProvider
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   
    // Google SignIn
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // register
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login 
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // observer
    useEffect(()=>{
       const unSubscribe =onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser);
          console.log(currentUser);
          setLoading(false)  
        })
        return()=>{
            unSubscribe()
        }
    },[])
   



//    authContext
    const authInfo = {
      user,
      loading,
      createUser,
      setUser,
      loginUser,
      googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;