import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Resources.css'

const Resources = () => {
    return (
        <Container fluid>
            <Header />

            <Container fluid>
                <Row className='resource-title'>
                    <h1 className='display-1'>Resources</h1>
                </Row>


            </Container>

            <Footer />
        </Container >
    )
}

export default Resources