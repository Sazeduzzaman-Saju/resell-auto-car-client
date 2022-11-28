import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Shared/Header/Header';
import './DashBoardLayout.css';
import {
    FaUserAlt
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import { AuthContext } from '../context/AuthProvider';
import useAdminProvide from '../hooks/useAdminProvide/useAdminProvide';
import useBuyerProvide from '../hooks/useBuyerProvide/useBuyerProvide';
import useSellerProvide from '../hooks/useSellerProvide/useSellerProvide';
import { FcBusinessman, FcHighPriority, FcHome, FcManager, FcPaid, FcPortraitMode, FcShop, FcViewDetails } from 'react-icons/fc';

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
                                <FcHome onClick={toggle} />
                            </div>
                        </div>

                        <Link to='/dashboard' className="link" activeclassName="active">
                            <div className="icon"><FcPaid /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">My Booking</div>
                        </Link>

                        {isAdmin &&
                            <Link to='/dashboard/seller' className="link" activeclassName="active">
                                <div className="icon"><FcPortraitMode /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">All Sellers</div>
                            </Link>
                        }

                        {isAdmin &&
                            <Link to='/dashboard/buyer' className="link" activeclassName="active">
                                <div className="icon"><FcManager /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">All Buyer</div>
                            </Link>
                        }

                        {isAdmin &&
                            <Link to='/dashboard/reported-post' className="link" activeclassName="active">
                                <div className="icon"><FcHighPriority /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">Reported</div>
                            </Link>
                        }
                        {isSeller &&
                            <Link to='/dashboard/seller/product' className="link" activeclassName="active">
                                <div className="icon"><FcViewDetails /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">My Products</div>
                            </Link>
                        }
                        {isSeller &&
                            <Link to='/dashboard/seller/product-post' className="link" activeclassName="active">
                                <div className="icon"><FcShop /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">Add product</div>
                            </Link>
                        }
                        {isBuyer &&
                            <Link to='/dashboard/allUsers' className="link" activeclassName="active">
                                <div className="icon"><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">My Products</div>
                            </Link>
                        }
                        <Link to='/dashboard/profile' className="link" activeclassName="active">
                            <div className="icon"><FcBusinessman /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text pt-2">{isAdmin ? <>Admin</> : <>Profile</>}</div>
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