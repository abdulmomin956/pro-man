import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from '../shared/Loading';

const RequierAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequierAuth;