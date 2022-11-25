// import React, { useEffect, useState } from 'react';
import Footer from '../../Page/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Page/Shared/Header/Header';
import SideCategory from '../../Page/Categories/SideCategory/SideCategory';

const CarCategoryLayout = () => {

    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-1 mt-5 '>
                        <h3 className='mb-5 text-center primary-bg text-white p-1 rounded'>Product Category</h3>
                        <SideCategory></SideCategory>
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-1 ' >
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CarCategoryLayout;