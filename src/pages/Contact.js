import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Contact.css'


const Contact = () => {
    return (
        <Container fluid>
            <Header />

            <Container fluid>
                <Row className='contact-title'>
                    <h1 className='display-1'>Contact</h1>
                </Row>
                <Row>

                </Row>

            </Container>

            <Footer />
        </Container >
    )
}

export default Contact