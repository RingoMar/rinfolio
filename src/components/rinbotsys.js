import {
  Button,
  Card,
  CardGroup,
  Container,
  ListGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

import Lazyload from "react-lazyload";
import LoadRin from "./preloadspin";
import React from "react";

function abouters() {
  return (
    <Container className="col-sm-6 col-md-9">
      <div className="rin-aboutcard row d-flex">
        <div className="col-sm-6">
          <h3 className="float-left" variant="primary">
            RIN BOT SYSTEMS
          </h3>
        </div>
      </div>
      <Card className="grad">
        <p className="float-left rin-sys">
          <span className="fixlikkleico material-icons">
            check_circle_outline
          </span>{" "}
          All Systems Running
        </p>
      </Card>

      <div className="pushed-"></div>
      <Card bg="dark" variant="dark">
        <Card.Body className="rin-sys d-flex justify-content-between">
          Rin Twitch{" "}
          <Button className="grad d-flex justify-content-between">
            Running
          </Button>
        </Card.Body>
      </Card>
      <Card bg="dark" variant="dark">
        <Card.Body className="rin-sys d-flex justify-content-between">
          Rin Discord{" "}
          <Button className="grad d-flex justify-content-between">
            Running
          </Button>
        </Card.Body>
      </Card>
      <Card bg="dark" variant="dark">
        <Card.Body className="rin-sys d-flex justify-content-between">
          Rin API{" "}
          <Button className="grad d-flex justify-content-between">
            Running
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default abouters;
