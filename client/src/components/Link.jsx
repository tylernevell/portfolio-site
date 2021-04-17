import React from "react";
import {NavItem, NavLink} from "reactstrap";

function Link(props) {
    return(
        <NavItem className="ml-auto">
            <NavLink href={props.href}>
                {props.name}
            </NavLink>
        </NavItem>
    );
}

export default Link;