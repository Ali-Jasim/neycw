import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Contact.css'


const Contact = () => {
    return (
        <Container fluid className='bg-img'>
            <Header />

            <Container fluid>
                <Row className='contact-title'>
                    <h1 className='display-1'>Contact</h1>
                </Row>
                <Row>
                    <Form className='d-flex flex-column align-items-center'>
                        <Form.Group className="mb-3 w-50 form-content" controlId="Email">
                            <Form.Label className='display-6'>Email Address</Form.Label>
                            <Form.Control className='border-black' type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 form-content" controlId="Message">
                            <Form.Label className='display-6'>Message</Form.Label>
                            <Form.Control className='border-black' as="textarea" rows={4} placeholder="Message" />
                        </Form.Group>
                        <Button variant='dark'>
                            <h3>Submit</h3>
                        </Button>
                        <br />
                    </Form>
                </Row>

            </Container>

            <Footer />
        </Container >
    )
}

export default Contact