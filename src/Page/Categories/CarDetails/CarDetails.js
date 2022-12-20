import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider';
import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import ReportModal from './ReportModal/ReportModal';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import { FcCancel } from "react-icons/fc";



const CarDetails = () => {
    useWebTitle('Car Details Page')
    const singleService = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, slug, position, title, img, description, price, gear_type, condition, mileage, wheel, model_id, negotiable_price } = singleService;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>

            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-1'>
                        <h3>{title}</h3>
                        <img src={img} className="img-fluid" alt="" />
                        <p className="mt-2 mb-5">{description}</p>
                        <div className='d-flex justify-content-between'>
                            <p>{_id}</p>
                            <Button variant="m-btn" onClick={() => handleShow(true)}>
                                <span><FcCancel></FcCancel></span> <span className='mt-2'>Report Post</span>
                            </Button>
                            <ReportModal
                                show={show}
                                handleClose={handleClose}
                                singleService={singleService}
                            ></ReportModal>
                            <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
                                <PrimaryButton >Buy Now</PrimaryButton>
                            </Link>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-1'>
                        <div className='shadow-lg p-3'>
                            <p className='fw-bold d-flex justify-content-between'>
                                <span>Price :</span> <span>${price}</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Brand :</span> <span>{slug.toUpperCase()}</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Gear Type :</span> <span>{gear_type}</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Condition :</span> <span>{condition}</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Mileage :</span> <span>{mileage} km</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Position :</span> <span>{position} Person</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Wheel :</span> <span>{wheel.toUpperCase()}</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Model :</span> <span>{model_id}</span>
                            </p>
                            <p className='d-flex justify-content-between'>
                                <span>Price Status :</span> <small className='primary-bg text-white p-1'>{negotiable_price ? <>Fixed</> : <>Negotiable</>}</small>
                            </p>
                        </div>
                        <div className='shadow-lg p-3 mt-5 mb-5'>
                            <div>
                                <span className="badge bg-secondary">Seller</span>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src={user?.photoURL} className="rounded-circle" alt="" style={{ width: '60px' }} />
                                    <div className='ms-3'>
                                        <p className='m-0'>{user?.displayName}</p>
                                        <p className='m-0'><FaPhone></FaPhone> +880 15333 51286</p>
                                        <p className='m-0'>
                                            <FaLocationArrow></FaLocationArrow> Dhaka,Bangladesh</p>
                                    </div>
                                </div>
                                <button className='btns mt-3'>Call Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;