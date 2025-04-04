import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxoisPublic from '../Hook/useAxoisPublic';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState({ name: "ismail" })
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxoisPublic()


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
            const userInfo = { email: currenUser?.email }

            if (currenUser) {
                axiosPublic.post('jwt', userInfo)
                    .then(res => {
                        console.log("curenUser", currenUser)
                        if (res.data.token) {
                            localStorage.setItem("authToken", res.data.token);
                        }
                    })
            }


            else {
                localStorage.removeItem("authToken");
            }

            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    const updateUser = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }


    const googleLog = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUser,
        googleLog

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;