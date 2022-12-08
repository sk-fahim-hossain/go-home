import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../../config.firebseInit';

const RequireAuth = () => {
    const [user, loading, error] = useAuthState(auth);
    
    
    return user ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
};

export default RequireAuth;