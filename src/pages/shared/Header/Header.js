import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar className='mt-3' collapseOnSelect expand="lg" bg="" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to="/home">Home</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink to="/login">Login</CustomLink>
                            <CustomLink to="/register">Register</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;