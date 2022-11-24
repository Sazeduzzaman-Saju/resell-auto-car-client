import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Header.css';


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const mainMenu = <>
        <Nav.Link as={NavLink} to={'/home'}>Home</Nav.Link>
        <Nav.Link as={NavLink} to={'/carsCategories'}>Categories</Nav.Link>
        <Nav.Link as={NavLink} to={'/contact'}>Contact</Nav.Link>
        <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
        <Nav.Link as={NavLink} to={'/others'}>Others</Nav.Link>
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

    return (
        <div className='primary-bg'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Final Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {mainMenu}
                        </Nav>
                        <Nav>
                            {user?.uid ?
                                <>
                                    <Nav.Link as={NavLink} onClick={handleSignOut}>SignOut</Nav.Link>
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