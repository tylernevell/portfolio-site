import React, { useState } from "react";
import {Collapse, Nav, NavbarToggler, NavItem, NavLink} from "reactstrap";
import NLink from "./Link";


function NavCollapsable() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NLink name={<i style={{fontSize: "30px"}} className="fab fa-github" />} href="https://github.com/tylernevell" />
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NLink name={<i style={{fontSize: "30px"}} className="fab fa-linkedin" />} href="https://linkedin.com/in/tylernevell" />
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem className="ml-auto">
                        <NavLink href="TylerNevell_resume_2021_safe.pdf" download>
                            <i style={{fontSize: "28px"}} className="far fa-file-alt" />
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
    );
}

export default NavCollapsable;