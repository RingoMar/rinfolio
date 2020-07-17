import React from "react";
import meImg from "./images/ringomar.png";
import codeStats from "./images/brave_JJaOJ3Cw96.jpg";
import {
  Button,
  Navbar,
  Nav,
  Container,
  Image,
  Card,
  ResponsiveEmbed,
} from "react-bootstrap";

function abouters() {
  return (
    <Container>
      <div style={{ margin: 60 }} className="row d-flex justify-content-center">
        <div className="col-sm-6">
          <Card border="info" bg="dark" variant="dark" className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <h1 variant="primary">ABOUT ME</h1>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img className="float-left" src={meImg} />
          <p>
            Lots of text here...With the four tiers of grids available you're
            bound to run into issues where, at certain breakpoints, your columns
            don't clear quite right as one is taller than the other. To fix
            that, use a combination of a .clearfix and o
          </p>
        </div>
      </div>
      <Card
        style={{ margin: "50px 0px 0px 0px" }}
        className="bg-dark text-white text-left"
      >
        <Card.Img src={codeStats} alt="Card image" />
        <Card.ImgOverlay>
          <h1 className="card-title">
            <ins>Code Stats</ins>
          </h1>
          <Card.Text>
            I code alot in my free time,{" "}
            <a herf="https://codestats.net/users/ringo">check out</a> my real
            time stats. (I could be coding right!)
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default abouters;
