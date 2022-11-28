import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import errorImage from './404 Error-amico.svg'
import PrimaryButton from '../../comps/PrimaryButton/PrimaryButton';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';

const ErrorPage = () => {
    useWebTitle('Error Route Please Back Home')
    return (
        <div className='errors-areas'>
            <section className='container '>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col ' data-aos="fade-up-left" data-aos-duration="1500">
                        <img className='img-fluid' src={errorImage} alt="" />
                    </div>
                    <div className='col text-center' data-aos="fade-up-left" data-aos-duration="3000">
                        <h1 className='fw-bold primary-color'>What You Want ? </h1>
                        <h4 className=' fw-bold'>It's Just A 404 Page</h4>
                        <p className='fw-semibold'>The page you are looking for might have been removed <br /> had it's name changed or is temporarily unavailable.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <PrimaryButton>Back Home</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;