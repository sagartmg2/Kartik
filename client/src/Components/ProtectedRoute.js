import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {

    // props.user
    if (props.login_status) {   
        return <Outlet />
    }
    return <Navigate to="login" />
   
}

export default ProtectedRoute;
