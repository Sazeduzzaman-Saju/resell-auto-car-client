import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Shared/Header/Header';
import './DashBoardLayout.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';

const DashBoardLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
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

                        <Link to={'/dashboard/allUsers'} className="link" activeclassName="active">
                            <div className="icon">
                                <FaTh />
                            </div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Product</div>
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