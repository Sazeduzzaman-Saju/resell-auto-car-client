import React from 'react';
import step1 from './Sign in-amico.svg';
import stepPost from './Wall post-amico.svg';
import BuySell from './Money income-amico.svg';

const Steps = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className=' text-center welcome-text' data-aos="fade-left" data-aos-duration="3000">
                    <h1 class="main-block__title mt-5 pt-5 primary-color "><strong>Steps</strong></h1>
                    <h6>Use Our System In Easy Way!</h6>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-sm-1 col-md-4">
                        <div className='border-0 shadow-lg text-center rounded' data-aos="fade-left" data-aos-duration="1000">
                            <img src={step1} className="w-50 pt-2" alt="" />
                            <h5 className='fw-bold'>Create a Free Account</h5>
                            <p className='px-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, facere.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-1 col-md-4">
                        <div className='border-0 shadow-lg text-center rounded' data-aos="fade-left" data-aos-duration="2000">
                            <img src={stepPost} className="w-50 pt-2" alt="" />
                            <h5 className='fw-bold'>Post your Car</h5>
                            <p className='px-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, facere.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-1 col-md-4">
                        <div className='border-0 shadow-lg text-center rounded' data-aos="fade-left" data-aos-duration="3000">
                            <img src={BuySell} className="w-50 pt-2" alt="" />
                            <h5 className='fw-bold'>Sold or Buy</h5>
                            <p className='px-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, facere.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;