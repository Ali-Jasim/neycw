import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Home.css'
import homeimg from '../images/home_photo.png'

const Home = () => {
    return (
        <Container fluid>
            <Header />

            <Container fluid className='home-container'>
                <Row className='home-content'>
                    <Col xs={12} md={8} className='img-container'>
                        <img className='home-img w-20' src={homeimg} />
                    </Col>

                    <Col xs={12} md={4} className='home-text-container'>
                        <h1 class="display-1 home-text">Newcomer Ethnocultural Youth Council Of Winnipeg</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button href='/about' variant='dark' className='nav-button'><h4 className='mt-1'>Learn More</h4></Button>
                    </Col>
                    <Col>
                        <Button href='/resources' variant='dark' className='nav-button'><h4 className='mt-1'>Resources</h4></Button>
                    </Col>
                    <Col>
                        <Button href='/contact' variant='dark' className='nav-button'><h4 className='mt-1'>Contact</h4></Button>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Container >
    )
}

export default Home