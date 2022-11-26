import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useUserToken from '../../hooks/useWebTItle/useUserToken/useUserToken';

const SignUp = () => {
    const [loginError, setLoginError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [userCreatedEmail, setUserCreatedEmail] = useState('');
    const [token] = useUserToken(userCreatedEmail)
    const navigate = useNavigate()

    if (token) {
        navigate('/');
    }
    const handleLogIn = (data) => {
        setLoginError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photURL
                }
                alert('Sign Up SuccessFully Done')
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.photURL)
                    })
                    .catch(err => console.error(err))

            })
    }

    const saveUser = (name, email, photURL) => {
        const user = { name, email, photURL };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserCreatedEmail(email)
            })
    }

    return (
        <div>
            <div class="section text-center">
                <h4 class="mb-4 pb-3">Sign Up</h4>
                <form onSubmit={handleSubmit(handleLogIn)}>
                    <input
                        {...register("name", {
                            required: 'Name'
                        })}
                        placeholder="Inter Your Name"
                        className='form-style mb-2'
                    />
                    {errors.name && <p className='text-danger mb-5'>{errors.name?.message}</p>}

                    <input
                        {...register("photURL", {
                            required: 'Photo URL Required'
                        })}
                        placeholder="Inter Your PhotoURL"
                        className='form-style mb-2'
                    />
                    {errors.photURL && <p className='text-danger mb-5'>{errors.photURL?.message}</p>}

                    <input
                        {...register("email", {
                            required: 'Email Address Required'
                        })}
                        placeholder="Inter Your Email Address"
                        className='form-style mb-2'
                    />
                    {errors.email && <p className='text-danger mb-5'>{errors.email?.message}</p>}


                    <input
                        {...register("password", {
                            required: 'Password Required'
                        })}
                        placeholder="Inter Your Password"
                        className=' form-style'
                    />
                    {errors.password && <p className='text-danger '>{errors.password?.message}</p>}
                    <input type="submit" value='Login' className='btns mt-3' />
                </form>
                <div className='text-danger text-center fw-bold'>
                    <p>{loginError.slice(10, 38)}</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;