import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';



const Footer = () => {

    return (
        <div>
            <footer class="primary-bg text-white">
                <div class="container py-5">
                    <div class="row py-3">

                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">About</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="/#" class="text-muted">Contact Us</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">About Us</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Stories</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Press</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Help</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="/#" class="text-muted">Payments</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Shipping</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Cancellation</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Returns</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Policy</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="/#" class="text-muted">Return Policy</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Terms Of Use</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Security</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Privacy</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="/#" class="text-muted">Login</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Register</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Sitemap</a></li>
                                <li class="mb-2"><a href="/#" class="text-muted">Our Products</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                            <p class="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                            <ul class="list-inline mt-4">
                                <li class="list-inline-item"><a href="/#" target="_blank" title="twitter"><FaTwitterSquare></FaTwitterSquare></a></li>
                                <li class="list-inline-item"><a href="/#" target="_blank" title="facebook"><FaFacebookSquare></FaFacebookSquare></a></li>
                                <li class="list-inline-item"><a href="/#" target="_blank" title="instagram"><FaInstagramSquare></FaInstagramSquare></a></li>
                                <li class="list-inline-item"><a href="/#" target="_blank" title="pinterest"><FaYoutubeSquare></FaYoutubeSquare></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="p-0 m-0 b-0" />


                <div class="bg-black py-2">
                    <div class="container text-center">
                        <p class="text-white mb-0 py-2">&copy; 2022 Sazeduzzaman All risghts reserved.</p>

                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Footer;