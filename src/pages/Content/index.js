import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Header from "../../components/_Header";

const Content = (props) => {
    const { isOpen, toggle } = props;
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": isOpen })}
      >
        <Header isOpen={isOpen} toggle={toggle} title="Content" />
      </Container>
    );
}

export default Content;
