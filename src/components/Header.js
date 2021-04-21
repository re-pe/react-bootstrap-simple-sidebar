import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar
            bg="light"
            className="navbar shadow-sm p-3 mb-5 bg-white rounded"
            expand
        >
            <Button variant="outline-info" onClick={props.toggle}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
                <Nav className="ml-auto" navbar>
                    <Nav.Link href="#">page</Nav.Link>
                    <Nav.Link href="#">page</Nav.Link>
                    <Nav.Link href="#">page</Nav.Link>
                    <Nav.Link href="#">page</Nav.Link>
                </Nav>
        </Navbar>
    );
}

export default Header;
