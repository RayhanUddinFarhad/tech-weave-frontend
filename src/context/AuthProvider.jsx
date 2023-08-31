"use client"
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, updateProfile, signInWithRedirect } from "firebase/auth";
import { app } from '@/firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);








    const signUp = (email, password) => {
        setLoading(true)
        

        return createUserWithEmailAndPassword(auth, email, password)


    }

    const googleLogin = () => {
        setLoading(true)
        



        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }

    const logIn = (email, password) => {
        setLoading(true)

        


        return signInWithEmailAndPassword(auth, email, password)




    }

    const updateUserProile = (name, photo) => {
        setLoading (true)


        return updateProfile(auth.currentUser , {

            displayName : name, photoURL  : photo
        })
    }




    useEffect(() => {



        const unsubscribe = onAuthStateChanged(auth, currentUser => {


            setUser(currentUser)
            setLoading(false)


           
            console.log(currentUser);
        })


        return () => {



            return unsubscribe()
        }
    }, [])



    const authInfo = {


        user,
        signUp,
        googleLogin,
        logOut,
        logIn,
        updateUserProile,
        loading
    }









    return (
        <AuthContext.Provider value={authInfo}>

        {children}



    </AuthContext.Provider>
    );
};

export default AuthProvider;