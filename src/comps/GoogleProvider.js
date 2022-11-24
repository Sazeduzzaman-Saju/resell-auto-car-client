import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const GoogleProvider = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <input className='btns' onClick={handleGoogleSingIn} type="submit" value={'In With Google'} />
        </div>
    );
};

export default GoogleProvider;