import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Shared/Header/Header';
import './DashBoardLayout.css';
import {
    FaTh,
    FaBars,
    FaUserAlt
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import { AuthContext } from '../context/AuthProvider';
import useAdminProvide from '../hooks/useAdminProvide/useAdminProvide';
import useBuyerProvide from '../hooks/useBuyerProvide/useBuyerProvide';
import useSellerProvide from '../hooks/useSellerProvide/useSellerProvide';

const DashBoardLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdminProvide(user?.email);
    const [isBuyer] = useBuyerProvide(user?.email);
    const [isSeller] = useSellerProvide(user?.email);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>

            <Header></Header>
            <div className=''>
                <div className="d-flex justify-content-center ">
                    <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar primary-bg">
                        <div className="top_section">
                            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                <FaBars onClick={toggle} />
                            </div>
                        </div>

                        <Link to='/dashboard' className="link" activeclassName="active">
                            <div className="icon"><FaTh /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">My Booking</div>
                        </Link>

                        {isAdmin &&
                            <Link to='/dashboard/seller' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">All Sellers</div>
                            </Link>
                        }

                        {isAdmin &&
                            <Link to='/dashboard/buyer' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">All Buyer</div>
                            </Link>
                        }

                        {isAdmin &&
                            <Link to='/dashboard/reported-post' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Reported</div>
                            </Link>
                        }
                        {isSeller &&
                            <Link to='/dashboard/allUsers' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Add A product</div>
                            </Link>
                        }
                        {isSeller &&
                            <Link to='/dashboard/allUsers' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">My Products</div>
                            </Link>
                        }
                        {isBuyer &&
                            <Link to='/dashboard/allUsers' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">My Products</div>
                            </Link>
                        }
                        <Link to='/dashboard/allUsers' className="link" activeclassName="active">
                            <div className="icon"><FaUserAlt /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Profile</div>
                        </Link>
                    </div>
                    <main>
                        <Outlet></Outlet>
                    </main>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default DashBoardLayout;