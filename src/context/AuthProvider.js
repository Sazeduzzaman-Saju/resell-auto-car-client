import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Login With Google Provider 
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //Login With Email And Password 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Create New user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // SignOut User
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    // Update User 
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        providerLogin,
        loginUser,
        createUser,
        signOutUser,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;