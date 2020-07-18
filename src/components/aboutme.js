import {
  Button,
  Card,
  Container,
  Image,
  Nav,
  Navbar,
  ResponsiveEmbed,
} from "react-bootstrap";

import React from "react";
import codeStats from "./images/brave_JJaOJ3Cw96.jpg";
import meImg from "./images/ringomar.png";

function abouters() {
  return (
    <Container>
      <div className="rin-aboutcard row d-flex justify-content-center">
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
      <div className="row clearfix">
        <div className="col-md-12">
          <img className="float-left rin-aboutimg" src={meImg} />
          <p className="rin-aboutme text-white">
            Hello, I’m Justin or as I go on the internet, Ringo Mar. I’m typical
            to average zoomer that loves coding, Music, Engineering and Memes.
            I’m a born and raised Trinidadian surviving through the gun
            violence, the corrupted politics and human trafficking in this small
            island. Yea, Yea, little over dramatic I know but that’s how it
            really be. Trinidad and Tobago be an underdeveloped country there
            isn’t much technical advances and it opens up the opportunity for I,
            Ringo Mar to get into the Information Technology market with some
            sort of out of the box idea they gotta make a whole new box.
          </p>
          <p className="rin-aboutme text-white">
            Anyways, PORGAMING! AUTOMATION! These are all the things that can
            change the world. Finding the smartest way to complete simple tasks
            with the click of a button. I program many automated programs that
            daily help me out go faster with my day, you can check out my open
            source projects as displayed on the home page{" "}
            <a herf="https://github.com/ringoMar/">here</a>.
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
