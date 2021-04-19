import React from 'react';
import FadeInSection from './FadeInSection';
import {Col, Container, Row} from 'reactstrap';
import Bio from './Bio';
import Avatar from './Avatar';

function Homepage() {
    return (
        <Container className="main-body">
            <FadeInSection>
                <Row>
                    <Col sm="12" md="12">
                        <Bio />
                    </Col>
                    <Col sm="12" md="12" lg={{ size: '5', offset: 1 }}>
                        <Avatar />
                    </Col>
                </Row>
            </FadeInSection>
        </Container>
    );
}

export default Homepage;