import React, { useContext, useState } from 'react';
import SignUp from '../SignUp/SignUp';
import './Login.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import GoogleProvider from '../../comps/GoogleProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import useUserToken from '../../hooks/useWebTItle/useUserToken/useUserToken';


const Login = () => {
    useWebTitle('Login Or Sign Up Your Choice')
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { loginUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useUserToken(loginEmail)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }
    const handleLogIn = (data) => {
        setLoginError('')
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(data.email)
                reset('');
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }

    useWebTitle('Login')
    return (
        <div class="section">
            <div class="container">
                <div class="row full-height justify-content-center">
                    <div class="col-12 text-center align-self-center py-5">
                        <div class="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 class="mb-0 pb-3">
                                <span>Log In </span>
                                <span>Sign Up</span>
                            </h6>
                            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label for="reg-log"></label>
                            <div class="card-3d-wrap mx-auto">
                                <div class="card-3d-wrapper">
                                    <div class="card-front">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                                <h4 class="mb-4 pb-3 text-black">Log In</h4>
                                                <form onSubmit={handleSubmit(handleLogIn)}>
                                                    <input
                                                        {...register("email", {
                                                            required: 'Email Address Required'
                                                        })}
                                                        placeholder="Email"
                                                        className='form-style'
                                                    />
                                                    {errors.email && <p className='text-danger mb-5'>{errors.email?.message}</p>}
                                                    <input
                                                        {...register("password", {
                                                            required: 'Password Required'
                                                        })}
                                                        placeholder="Password"
                                                        className='mt-3 form-style'
                                                    />
                                                    {errors.password && <p className='text-danger '>{errors.password?.message}</p>}
                                                    <input type="submit" value='Login' className='btns mt-3' />
                                                </form>
                                                <p class="mb-0 mt-4 text-center text-black">
                                                    Forgot your password?
                                                </p>
                                                <GoogleProvider></GoogleProvider>
                                            </div>
                                            <div className='text-danger text-center fw-bold'>
                                                <p>{loginError.slice(10, 38)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <SignUp></SignUp>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;