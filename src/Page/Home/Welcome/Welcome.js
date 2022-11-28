import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row ' >
                    <div className='col-lg-2 col-md-2 col-sm-1' >
                        <div className="box" data-aos="fade-left" data-aos-duration="1000">
                            <img className="img-responsive" src="https://i.ibb.co/chWVXqF/1.png" height="250" width="170" alt="Foto" />
                            <div className="box-content">
                                <h3 className="title">Toyota</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-1'>
                        <div className="box" data-aos="fade-left" data-aos-duration="2000">
                            <img className="img-responsive" src="https://i.ibb.co/wrSFygy/2.png" height="250" width="170" alt="Foto" />
                            <div className="box-content">
                                <h3 className="title">BMW</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-1 mt-5'>
                        <div className=' text-center welcome-text' data-aos="fade-left" data-aos-duration="3000">
                            <div className="text-muted uppercase">welcome to</div>
                            <h1 className="main-block__title mt-5 pt-5 primary-color "><strong>AUTOZONE</strong></h1>
                            <h6>the ONLINE AUTOS world</h6>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-2 col-sm-1'>
                        <div className="box" data-aos="fade-left" data-aos-duration="2000">
                            <img className="img-responsive" src="https://i.ibb.co/W0qd1TC/3.png" height="250" width="170" alt="Foto" />
                            <div className="box-content">
                                <h3 className="title">Ford</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-1' >
                        <div className="box" data-aos="fade-left" data-aos-duration="3000">
                            <img className="img-responsive" src="https://i.ibb.co/LR0dKQD/4.png" height="250" width="170" alt="Foto" />
                            <div className="box-content">
                                <h3 className="title">Jeep</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Welcome;