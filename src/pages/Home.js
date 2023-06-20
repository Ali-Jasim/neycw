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
                    <Col xs={6} md={6} className=' img-container'>
                        <img className='home-img' src={homeimg} />

                    </Col>
                    <Col xs={12} md={5} className='home-text-container'>
                        <h1 class="display-1 home-text">A VOLUNTARY YOUTH BODY</h1>
                    </Col>
                </Row>
                <Row>
                    <Button className='learn'><h4 className='mt-2'>Learn More</h4></Button>
                </Row>
            </Container>

            <Footer />
        </Container >
    )
}

export default Home