import React from 'react';
import AppNavBar from "./AppNavBar";
import FadeInSection from "./FadeInSection";
import Bio from "./Bio";
import Avatar from "./Avatar";

import colors from "./css-colors";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";


function App() {
    return(
        <div>
            <Container>
                <AppNavBar />
            </Container>
            <Container>
                <Container className="main-body">
                    <FadeInSection>
                        <Row>
                            <Col sm="12" md="6">
                                <Bio />
                            </Col>
                            <Col sm="12" md="6" lg={{ size: '5', offset: 1 }}>
                                <Avatar />
                            </Col>
                        </Row>
                    </FadeInSection>
                </Container>
                <Row>
                    <Col>
                        {colors.map((color) => (
                            <FadeInSection key={color}>
                                <div className="box" style={{ backgroundColor: color }}>
                                    {color}
                                </div>
                            </FadeInSection>
                        ))}
                    </Col>

                </Row>

            </Container>

        </div>
    );
}

export default App;

// For passing components as an array https://stackoverflow.com/questions/48131100/react-render-array-of-components