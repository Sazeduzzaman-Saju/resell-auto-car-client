import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import PropagateLoader from "react-spinners/PropagateLoader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <>
            <div className='row'>
                <div className='col  d-flex justify-content-center align-items-center' style={{ height: "35rem" }}>
                    <PropagateLoader color="#36d7b7" />
                </div>
            </div>
        </>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ form: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;