import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Mynavbar = () => {
    
    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <BootstrapNavbar.Brand href="/" className='name'>Aryan Yogesh Sujan</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <div className="ms-auto d-flex align-items-center">
                        <Link className="nav-link text-white mx-2" to="/">Home</Link>
                        <Link className="nav-link text-white mx-2" to="/aboutme">About</Link>
                        <Link className="nav-link text-white mx-2" to="/project">Projects</Link>
                        <Link className="nav-link text-white mx-2" to="/skills">Skills</Link>
                        <Link className="nav-link text-white mx-2" to="/contact">Contact</Link>
                    </div>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Mynavbar;