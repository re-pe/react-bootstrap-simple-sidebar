import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

const Header = (props) => {
    const { isOpen, title, toggle } = props;
    return (
        <Navbar
            bg="light"
            className="navbar shadow-sm p-3 mb-5 bg-white rounded"
            expand
        >
            <Nav navbar>
            <Button variant="outline-info" onClick={toggle}>
                <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
            </Button>
            </Nav>
            <h1 className="mx-auto">{title}</h1>
            <Nav navbar>
                <Nav.Link href="#">Login</Nav.Link>
                <Nav.Link href="#">Sign Up</Nav.Link>
                <Nav.Link href="#">Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;
