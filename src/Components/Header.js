import React from 'react'
import './Header.css'

import { Navbar, Nav } from 'react-bootstrap'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <Navbar expand="md">

            <Navbar.Brand href="/"><img
                width={250}
                src={logo} /></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className="">
                    <Nav.Link href="/">
                        <h4 className='mx-2'>Home</h4>
                    </Nav.Link>
                    <Nav.Link href="/about">
                        <h4 className='mx-2'>About</h4>
                    </Nav.Link>
                    <Nav.Link href="/resources">
                        <h4 className='mx-2'>Resources</h4>
                    </Nav.Link>
                    <Nav.Link href="/contact">
                        <h4 className='mx-2'>Contact</h4>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header