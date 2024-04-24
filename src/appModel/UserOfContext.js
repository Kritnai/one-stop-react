import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth: ", currentUser);
            setUser(currentUser);
        })

        return () => {
            unsubsribe();
        }
    }, [])

    return (
        <userAuthContext.Provider value={{user, logIn, signUp, logOut}}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth(){
    return useContext(userAuthContext);
}