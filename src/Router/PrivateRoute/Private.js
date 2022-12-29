import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../AuthContext/AuthContext';

const Private = ({children}) => {
    const {user,loading}=useContext(userContext)

if(loading){
    return <div><h2>loading................</h2></div>
    
}
if(user && user.email){
    return children
}


    return <Navigate to="/login"> </Navigate>

};

export default Private;