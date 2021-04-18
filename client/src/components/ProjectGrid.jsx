import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectSquare from "./ProjectSquare";

function ProjectGrid(props) {
    return (

        <div>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <ProjectSquare />
                </Col>
                <Col sm="12" md="6" lg="4">
                    <ProjectSquare />
                </Col>
                <Col md="12" lg="4">
                    <ProjectSquare />
                </Col>
            </Row>
        </div>
    );
}

export default ProjectGrid;