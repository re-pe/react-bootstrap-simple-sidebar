import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";

const Content = (props) => {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": props.isOpen })}
      >
        <Header toggle={props.toggle} />
      </Container>
    );
}

export default Content;
