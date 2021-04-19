import React from 'react';
import AppNavBar from "./AppNavBar";
import Homepage from "./Homepage";
import ProjectGrid from "./ProjectGrid";
import Footer from "./Footer";
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
                <ProjectGrid />
                <Footer />
            </Container>

        </div>
    );
}

export default App;

// For passing components as an array https://stackoverflow.com/questions/48131100/react-render-array-of-components