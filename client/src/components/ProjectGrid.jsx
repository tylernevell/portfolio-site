import React from 'react';
import { Row, Col } from 'reactstrap';
import FadeInSection from './FadeInSection';
import ProjectSquare from './ProjectSquare';
import projects from './projects';

function ProjectGrid(props) {
    return (

        <div style={{marginTop: "80px"}}>
            <FadeInSection>
                <Row>
                    <Col sm="12" md="6" lg="4">
                        <ProjectSquare project={projects[0]} />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <ProjectSquare project={projects[1]} />
                    </Col>
                    <Col md="12" lg="4">
                        <ProjectSquare project={projects[2]} />
                    </Col>
                </Row>
            </FadeInSection>
            <FadeInSection>
                <Row>
                    <Col sm="12" md="6" lg="4">
                        <ProjectSquare project={projects[3]} />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <ProjectSquare project={projects[4]} />
                    </Col>
                    <Col md="12" lg="4">
                        <ProjectSquare project={projects[5]} />
                    </Col>
                </Row>
            </FadeInSection>
        </div>
    );
}

export default ProjectGrid;