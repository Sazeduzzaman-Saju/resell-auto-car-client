import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Header.css';
import { FaCartPlus, FaTrash } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useQuery } from '@tanstack/react-query';


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, signOutUser } = useContext(AuthContext);
    const mainMenu = <>
        <Nav.Link as={NavLink} to={'/home'}>Home</Nav.Link>
        <Nav.Link as={NavLink} to={'/carsCategories'}>Categories</Nav.Link>
        <Nav.Link as={NavLink} to={'/blog'}>Blog</Nav.Link>
        <Nav.Link as={NavLink} to={'/contact'}>Contact</Nav.Link>
        <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
        <Nav.Link as={NavLink} to={'/dashboard'}>Dashboard</Nav.Link>
    </>
    const userMenu = <>
        <Nav.Link as={NavLink} to={'/login'}>Login</Nav.Link>

    </>


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('user Sign out Successfully')
            })
            .catch(err => console.error(err))
    }
    const url = 'http://localhost:5000/wishlist';
    const { data: wisListItems = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            refetch()
            return data;
        }
    })
    console.log(wisListItems)
    return (
        <div className='primary-bg'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to={'/home'}>
                        <img src="https://i.ibb.co/mG8Dn0Z/logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {mainMenu}
                        </Nav>
                        <Nav className="d-flex justify-content-center align-items-center">
                            {user?.uid ?
                                <>
                                    <Nav.Link as={NavLink} onClick={handleSignOut}>SignOut</Nav.Link>
                                    <div>
                                        <button className='rounded-circle' onClick={handleShow}>
                                            <span class="position-relative end-50 start-100 translate-middle badge rounded-pill bg-danger">
                                                3
                                            </span>
                                            <FaCartPlus className='bg-primary fs-6'></FaCartPlus>
                                        </button>

                                        <Offcanvas show={show} onHide={handleClose}>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title className='fs-2 fw-bold'>Your Chosen Car</Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <div className="container">
                                                    <div className='row'>
                                                        {wisListItems.map(items => <div
                                                            key={items._id}>
                                                            <div class="card mb-3" >
                                                                <div class="row ">
                                                                    <div class="col-md-4 border-0">
                                                                        <img src={items.product_img} class="img-fluid rounded" alt="..." style={{ height: "80px" }} />
                                                                    </div>
                                                                    <div class="col-md-8 border-0">
                                                                        <div className="card-body d-flex justify-content-between align-items-center p-0 pt-4">
                                                                            <p class=" fs-6">{items.product_title}</p>
                                                                            <p class=" fs-6">
                                                                                ${items.price}
                                                                            </p>
                                                                            <p class=" ">
                                                                                <button className='cart'>
                                                                                    <FaTrash></FaTrash>
                                                                                </button>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)}
                                                    </div>
                                                </div>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </div>
                                    <img className='img-fluid rounded-circle' style={{ width: '30px', height: "30px" }} src={user?.photoURL} alt="" />
                                </>
                                :
                                <>
                                    {userMenu}
                                </>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;