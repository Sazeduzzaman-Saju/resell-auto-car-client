import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className=''></div>
                </div>
            </div>
            <div className="bg-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="text-center" style={{
                                visibility: 'visible',
                                animationDuration: '2s',
                                animationDelay: '1s',
                                animationName: 'bounceInUp'
                            }}>
                                <div className="">welcome to</div>
                                <div className="></div>
                                <h1 className="main-block__title"><strong>AUTOZONE</strong>the ONLINE AUTOS world</h1>
                            <div className="decor-2"><i className="icon fa fa-caret-down"></i></div>
                        </div>
                        <div className="wrap-link-img">
                            <ul className="link-img link-img_mod-a list-inline wow bounceInLeft" data-wow-duration="2s" style={{
                                visibility: 'visible',
                                animationDuration: '2s', animationDelay: '1s',
                                animationName: 'bounceInUp'
                            }}>
                                <li className="link-img__item"> <a className="link-img__link" href="/">
                                    <img className="img-responsive" src="https://i.ibb.co/chWVXqF/1.png" height="250" width="170" alt="Foto" />
                                    <div className="link-img__wrap-title"><span className="link-img__title">all brands</span></div>
                                </a> </li>
                                <li className="link-img__item"> <a className="link-img__link" href="/;"><img className="img-responsive" src="https://i.ibb.co/wrSFygy/2.png" height="250" width="170" alt="Foto" />
                                    <div className="link-img__wrap-title"><span className="link-img__title">FREE SUPPORT</span></div>
                                </a> </li>
                            </ul>
                            <ul className="link-img link-img_mod-b list-inline wow bounceInRight" data-wow-duration="2s" style={{
                                visibility: 'visible',
                                animationDuration: '2s', animationDelay: '1s',
                                animationName: 'bounceInUp'
                            }}>
                                <li className="link-img__item"> <a className="link-img__link" href="/;"><img className="img-responsive" src="https://i.ibb.co/W0qd1TC/3.png" height="250" width="170" alt="Foto" />
                                    <div className="link-img__wrap-title"><span className="link-img__title">DEALERSHIP</span></div>
                                </a> </li>
                                <li className="link-img__item"> <a className="link-img__link" href="/;"><img className="img-responsive" src="https://i.ibb.co/LR0dKQD/4.png" height="250" width="170" alt="Foto" />
                                    <div className="link-img__wrap-title"><span className="link-img__title">AFFORDABLE</span></div>
                                </a> </li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-sm-6 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="1s" style={{
                        visibility: 'visible',
                        animationDuration: '2s', animationDelay: '1s',
                        animationName: 'bounceInUp'
                    }}>
                        <p>Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget pulvinar mattis risus quisque sagittis lorem acdua eros pharetral interdum quisque convallis nulla dpsum val mualiquam arcu arcu lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exl commodo consequat. Duis auteir dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>

                    <div className="col-sm-6 wow bounceInRight" data-wow-duration="2s" data-wow-delay="1s" style={{
                        visibility: 'visible',
                        animationDuration: '2s', animationDelay: '1s',
                        animationName: 'bounceInUp'
                    }}>
                        <h2 className="ui-title-inner">MAIN FEATURES</h2>
                        <div className="decor-1"></div>
                        <ul className="list-mark list-unstyled">
                            <li> <i className="decor-3 fa fa-caret-right"></i>Maecenas mattis facilisis arcu Ised  Morbi accumsan dignissim sed libero lorem ipsum </li>
                            <li> <i className="decor-3 fa fa-caret-right"></i>Phasellus eget nisl vel lacus ipsum diui proin rutrum turpis non nulla it amet consectetur </li>
                            <li> <i className="decor-3 fa fa-caret-right"></i>Dhasellus consequat sed acda duia aliquam massa suspendisse porta do eiusmod tempa </li>
                        </ul>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xs-12"> <a className="brand-link text-center wow bounceInUp" data-wow-duration="2s" data-wow-delay="1s" href="/;" style={{
                        visibility: 'visible',
                        animationDuration: '2s', animationDelay: '1s',
                        animationName: 'bounceInUp'
                    }}>
                        <i className="icon fa fa-caret-right"></i>SEE LISTED VEHICLES<i className="icon fa fa-caret-left"></i><span className="br"></span>
                        <div className="decor-1 decor-1_mod-b"></div>
                    </a> </div>

                </div>

            </div>

        </div>
        </div >
    );
};

export default Welcome;