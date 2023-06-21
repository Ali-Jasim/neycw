import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './About.css'
import { FaConnectdevelop, FaThinkPeaks, FaSkyatlas, FaPushed } from 'react-icons/fa';

const About = () => {
    return (
        <Container fluid>
            <Header />

            <Container fluid>
                <Row className='who-container'>
                    <h1 className='display-1'>Who are we?</h1>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='info-card-light'>
                        <h2> <FaConnectdevelop size={100} /> Terms of Reference</h2>

                        <p>
                            The Immigration Partnership Winnipeg is a Local Immigration Partnership. Local Immigration Partnerships (LIPs) are multi-sectoral collectives that bring a new form of collaboration, at the community-level, to newcomer settlement and integration. They are designed to establish, facilitate and implement a community-wide strategy for improving the settlement and integration of immigrants. The LIP model is having success across Canada with more than 70 LIPs across the country.
                            Funding and support for the LIPs comes from Immigration, Refugees and Citizenship Canada (IRCC). The Immigration Partnership Winnipeg (IPW) helps create an inclusive welcoming community that has a strong desire and capacity to receive newcomers and make them feel at home.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className='info-card'>
                        <h2> <FaThinkPeaks size={100} /> Background</h2>

                        <p>
                            The Newcomer Ethnocultural Youth Council of Winnipeg (NEYCW) is a voluntary youth body established with the ultimate goal of advising social, settlement organizations, governments, business community, unions, universities and colleges on needs and priorities of newcomer youth. Immigration Partnership Winnipeg (IPW) facilitates that work of the NEYCW as a partner in promoting inclusiveness and collaborative approaches to the provision of services to newcomer youth in Winnipeg.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className='info-card'>
                        <h2> <FaPushed size={100} /> Operating Values</h2>

                        <ul>
                            <li>
                                <p>To ensure that the Winnipeg newcomer youth voice is represented on issues that matters to them.</p>
                            </li>
                            <li>
                                <p>To encourage and enable newcomer youth to engage with community and the different levels of government.</p>
                            </li>
                            <li>
                                <p>To promote mutual respect and understanding among youth from different ethno-cultural backgrounds.</p>
                            </li>
                            <li>
                                <p>To expose newcomer youth to the history of Indigenous Peoples and position them to be part of the reconciliation process.</p>
                            </li>
                            <li>
                                <p>To help social and settlement organizations to make informed decisions in the delivery of meaningful services to newcomer youth.</p>
                            </li>
                            <li>
                                <p>To help all levels of government to better understand and prioritize the service needs of newcomer youth.</p>
                            </li>
                            <li>
                                <p>To build capacity among ethno-cultural communities and increase awareness on the potentials, needs and challenges of newcomer youth.</p>
                            </li>
                            <li>
                                <p>To extend the mandate of IPW in creating awareness about successful settlement and integration of youth.</p>
                            </li>
                            <li>
                                <p>To build positive relationships between law enforcement in the city and newcomer youth.</p>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} className='info-card-light'>
                        <h2> <FaSkyatlas size={100} /> Purpose</h2>

                        <ul>
                            <li>
                                <p>Commit to participating in an environment that promotes acceptance, honesty, accountability, trust and fairness.</p>
                            </li>
                            <li>
                                <p>Encourage and support new ideas and creative strategies which will enhance the delivery of services for newcomer youth in our city.</p>
                            </li>
                            <li>
                                <p>Promote and encourage inclusiveness, through membership on the committee and in all facets of its work.</p>
                            </li>
                            <li>
                                <p>Create a safe and inclusive space for LGBTQ newcomer and ethnocultural youth within NEYCW and throughout Winnipeg.</p>
                            </li>
                        </ul>
                        <Button href='/resources' variant='dark' className='bg-black info-button' ><h4>Check Available Resources</h4></Button>
                        <br />
                    </Col>

                </Row>

                <br />
            </Container>

            <Footer />
        </Container >
    )
}

export default About