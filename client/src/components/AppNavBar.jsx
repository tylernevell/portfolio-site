import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import NavCollapsable from "./NavCollapsable";

function AppNavBar(props) {

    return (
        <div>
            <Navbar style={{backgroundColor: "black"}} dark expand="sm" className="mb-5" fixed="top">
                <Container>
                    <div>
                        <NavbarBrand href="/" className="name-header">Tyler Nevell</NavbarBrand>
                    </div>
                    <NavCollapsable />
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavBar;