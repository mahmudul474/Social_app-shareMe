import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase_config/Firebase.config';

 export const userContext=createContext()
const auth=getAuth(app)


const AuthContext = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading]=useState(true)
 

const createuser=(email,password)=>{
 setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)

}

const login=(email,password)=>{
setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

}


const uptadeUser=(userinfo)=>{
   return updateProfile(auth.currentUser,userinfo) 
}


const loginwithgoogle=(probaider)=>{
    return signInWithPopup(auth,probaider)
}


const logout=()=>{
    setLoading(true)
    return signOut(auth)
}


useEffect(()=>{
const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
    setLoading(false)
    setUser(currentUser)

 })


 return ()=>{
unsubscribe()
 }


},[])



  
    const info = {
      createuser,
      login,
      logout,
      loading,
      setLoading,
      user,
      uptadeUser,
      loginwithgoogle
    };
         
    return (
        <userContext.Provider value={info}>
            {
                children

            }
        </userContext.Provider>
    );
};

export default AuthContext;
