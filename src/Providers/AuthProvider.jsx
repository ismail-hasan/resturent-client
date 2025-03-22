import React, { createContext, useState } from 'react';
import auth from '../FireBase/FireBase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';



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
        return signInWithEmailAndPassword(email, password)
    }
    

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;