import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';



const Footer = () => {

    return (
        <div>
            <footer className="primary-bg text-white">
                <div className="container py-5">
                    <div className="row py-3">

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Contact Us</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">About Us</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Stories</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Press</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Payments</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Shipping</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Cancellation</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Returns</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Policy</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Return Policy</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Terms Of Use</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Security</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Privacy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Login</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Register</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Sitemap</a></li>
                                <li className="mb-2"><a style={{ textDecoration: 'none' }} href="/#" className="text-muted">Our Products</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                            <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a style={{ textDecoration: 'none' }} href="/#" target="_blank" title="twitter">
                                    <button className='btn  rounded-circle text-white'><FaTwitterSquare className='fs-3'></FaTwitterSquare></button>
                                </a></li>
                                <li className="list-inline-item"><a style={{ textDecoration: 'none' }} href="/#" target="_blank" title="facebook">
                                    <button className='btn  rounded-circle text-white'><FaFacebookSquare className='fs-3'></FaFacebookSquare></button>

                                </a></li>
                                <li className="list-inline-item"><a style={{ textDecoration: 'none' }} href="/#" target="_blank" title="instagram">
                                    <button className='btn  rounded-circle text-white'><FaInstagramSquare className='fs-3'></FaInstagramSquare></button>

                                </a></li>
                                <li className="list-inline-item"><a style={{ textDecoration: 'none' }} href="/#" target="_blank" title="pinterest">
                                    <button className='btn  rounded-circle text-white'><FaYoutubeSquare className='fs-3'></FaYoutubeSquare></button>


                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="p-0 m-0 b-0" />


                <div className="bg-black py-2">
                    <div className="container text-center">
                        <p className="text-white mb-0 py-2">&copy; 2022 Sazeduzzaman All risghts reserved.</p>

                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Footer;