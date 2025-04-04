import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (user) return children

    if (loading) {
        return <h3>looooooooooooading</h3>
    }
    return <Navigate to={'/login'} state={{ from: location }}></Navigate>
};

export default PrivetRoute;