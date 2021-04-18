import React from 'react';
import AppNavBar from "./AppNavBar";
import FadeInSection from "./FadeInSection";
import Homepage from "./Homepage";
import ProjectGrid from "./ProjectGrid";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";


function App() {
    return(
        <div>
            <Container>
                <AppNavBar />
            </Container>
            <Container>
                <Homepage />
                <FadeInSection>
                    <ProjectGrid />
                </FadeInSection>
                <FadeInSection>
                    <ProjectGrid />
                </FadeInSection>
            </Container>

        </div>
    );
}

export default App;

// For passing components as an array https://stackoverflow.com/questions/48131100/react-render-array-of-components