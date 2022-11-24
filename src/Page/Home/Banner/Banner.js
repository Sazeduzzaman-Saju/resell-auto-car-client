import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='pt-0'>
                <div className='row mb-5'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <section class="showcase">
                            <img src="https://i.ibb.co/5Ffkjhj/11.jpg" alt="" />
                            <div class="overlay" >
                                <div data-aos="fade-left" data-aos-duration="3000">

                                    <h2>VEHICLE LISTINGS <br /> IN YOUR HAND</h2>
                                    <p className='primary-bg p-3'>
                                        Find the best deals on cars from<br /> the trusted dealers and sellers.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;