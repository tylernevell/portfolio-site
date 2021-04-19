import React from "react";
import {NavItem, NavLink} from "reactstrap";

function NLink(props) {
    return(
        <NavItem className="ml-auto">
            <NavLink href={props.href} target="_blank" rel="noopener noreferrer">
                {props.name}
            </NavLink>
        </NavItem>
    );
}

export default NLink;