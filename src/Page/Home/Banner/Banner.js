import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='pt-0'>
                <div className='row mb-5'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <section class="showcase">
                            <img className="img-fluid" src="https://i.ibb.co/rmb2HSk/joey-banks-YApi-Wyp0lqo-unsplash.jpg" alt="" />
                            <div class="overlay" >
                                <div data-aos="fade-left" data-aos-duration="3000">

                                    <h2>VEHICLE LISTINGS <br /> IN YOUR HAND</h2>
                                    <p className='primary-bg p-3 mb-0'>
                                        Find the best deals on cars from<br /> the trusted dealers and sellers.
                                    </p>
                                    <p className=' '>
                                        Find the good quality <br /> cars from our app
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