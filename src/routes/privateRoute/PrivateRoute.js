import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// only allow authenticated user to visit the route
//redirect user to the route they wanted before login

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }

    return children;
};

export default PrivateRoute;