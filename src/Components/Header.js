import React from 'react'
import './Header.css'

import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <Navbar expand="md" className=''>

            <Navbar.Brand className='' href="/">

                <h1 className='display-3'> <img src={logo} />NEYCW</h1>


            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className="">
                    <Nav.Link href="/" className=''>
                        <h4 className='mx-1 text-dark display-6 header-nav'>Home</h4>
                    </Nav.Link>
                    <Nav.Link href="/about">
                        <h4 className='mx-1 text-dark display-6 header-nav'>About</h4>
                    </Nav.Link>
                    <Nav.Link href="/resources">
                        <h4 className='mx-1 text-dark display-6 header-nav'>Resources</h4>
                    </Nav.Link>
                    <Nav.Link href="/contact">
                        <h4 className='mx-1 text-dark display-6 header-nav'>Contact</h4>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header