import React from 'react'
import './Footer.css'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid className='d-flex flex-column justify-content-center align-items-center'>

            <Row>
                <hr />
                <p>432 Ellice Avenue Winnipeg, MB, Canada R3B1Y4 | Phone: 204-943-2561 ext. 236 | Email: neycwinnipeg@gmail.com</p>
            </Row>
            <Row>
                <small>Copyright © 2023 Newcomer Ethnocultural Youth Council of Winnipeg (NEYCW)</small>
            </Row>
        </Container>
    )
}

export default Footer