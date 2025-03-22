import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "ismail" })
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            console.log("curenUser", currenUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const logoutUser = () => {
        return signOut(auth)
    }


    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }



    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUser


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;