import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Resources.css'

import accessibility from '../images/accessibility.png'
import education from '../images/education.png'
import elderly from '../images/Elderly.png'
import employment from '../images/Employment.png'
import women from '../images/women.png'
import wellness from '../images/wellness.png'
import recreation from '../images/recreation.png'
import mental from '../images/mentalhealth.png'
import settlement from '../images/settlement.png'
import youth from '../images/Youth.png'
import language from '../images/language.png'
import housing from '../images/Housing.png'
import legal from '../images/legal.png'
import ethno from '../images/ethnocultural.png'




const Resources = () => {
    return (
        <Container fluid>
            <Header />

            <Container fluid>
                <Row className='resource-title'>
                    <h1 className='display-1'>Resources</h1>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='access-img' src={legal} />
                        <p className='display-6 card-text'>Legal Services</p>
                        <Button href='https://www.ipwinnipeg.org/legal-services' variant='dark' className='bg-black learn-more' ><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='access-img' src={housing} />
                        <p className='display-6 card-text'>Housing Services</p>
                        <Button href='https://www.ipwinnipeg.org/housing-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='employment-img' src={employment} />
                        <p className='display-6 card-text'>Employment Services</p>
                        <Button href='https://www.ipwinnipeg.org/employment-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='women-img' src={women} />
                        <p className='display-6 card-text'>Women Services</p>
                        <Button href='https://www.ipwinnipeg.org/women-and-family-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='accessbility-img' src={accessibility} />
                        <p className='display-6 card-text'>Accessibility Services</p>
                        <Button href='https://www.ipwinnipeg.org/accessibility-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='access-img' src={education} />
                        <p className='display-6 card-text'>Education Services</p>
                        <Button href='https://www.ipwinnipeg.org/education-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='ethno-img' src={ethno} />
                        <p className='display-6 card-text'>Ethnocultural Services</p>
                        <Button href='https://www.ipwinnipeg.org/ethnocultural-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='wellness-img' src={wellness} />
                        <p className='display-6 card-text'>Wellness Services</p>
                        <Button href='https://www.ipwinnipeg.org/health-and-wellness-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='rec-img' src={recreation} />
                        <p className='display-6 card-text'>Recreation Services</p>
                        <Button href='https://www.ipwinnipeg.org/recreational-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='elderly-img' src={elderly} />
                        <p className='display-6 card-text'>Elderly Services</p>
                        <Button href='https://www.ipwinnipeg.org/senior-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='mental-img' src={mental} />
                        <p className='display-6 card-text'>Mental Health Services</p>
                        <Button href='https://www.ipwinnipeg.org/mental-health-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='access-img' src={settlement} />
                        <p className='display-6 card-text'>Settlement Services</p>
                        <Button href='https://www.ipwinnipeg.org/general-settlement-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center '>
                        <img className='access-img' src={youth} />
                        <p className='display-6 card-text'>Youth Services</p>
                        <Button href='https://www.ipwinnipeg.org/youth-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex flex-column align-items-center resource-container'>
                        <img className='language-img' src={language} />
                        <p className='display-6 card-text'>Language Services</p>
                        <Button href='https://www.ipwinnipeg.org/language-services' variant='dark' className='bg-black learn-more'><h3 classname='mt-2'>Learn More</h3></Button>
                        <br />
                    </Col>
                </Row>

                <br />
            </Container>

            <Footer />
        </Container >
    )
}

export default Resources