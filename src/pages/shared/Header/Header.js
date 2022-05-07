import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar className='mt-3' collapseOnSelect expand="lg" bg="" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to="/home">Home</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink to="/register">Register</CustomLink>
                            {user ? <button className='btn btn-link text-black fw-bold text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <CustomLink to="/login">
                                    Login
                                </CustomLink>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;