import {
  Button,
  Card,
  CardGroup,
  Container,
  Image,
  Nav,
  Navbar,
  ResponsiveEmbed,
} from "react-bootstrap";

import Lazyload from "react-lazyload";
import LoadRin from "./preloadspin";
import React from "react";
import v from "./images/vs.png";
import b from "./images/brave.png";
import d from "./images/sx.png";
import k from "./images/kden.png";
import g from "./images/gimp.png";
import codeStats from "./images/brave_JJaOJ3Cw96.jpg";
import meImg from "./images/ringomar.png";

function abouters() {
  return (
    <Container>
      <div className="rin-aboutcard row d-flex">
        <div className="col-sm-6">
          <h3 className="float-left" variant="primary">
            ABOUT ME
          </h3>
          <hr className="hr-color-up" />
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
            really be. Trinidad and Tobago, your typical to average 3rd world
            county where growing up everyone wasn’t to be a DJ, Party promoter,
            Football star, Doctor, Lawyer ya-da ya-da. I wanted to be different,
            and when I was home recovering from a surgery I picked up on
            programming.
          </p>
          <p className="rin-aboutme text-white">
            When is started programming, I wanted to build chatbots and automate
            tasks through Discord. This would then lead to me wanting to have
            Twitch chatbot that I could use. The challenge with this was that
            every library out there was too complicated, and it felt like I was
            developing an app for a iPhone because of how restricted my freedom
            felt. My only solution was to take on myself and make my own library
            wrapper that runs perfectly with the Twitch API. After a year’s work
            it’s a totally stable, ever growing, multi-threaded library. That
            has pushed forward to making my other projects that consist of
            automated task; News article updates, API changes, changing on
            competition rankings and more. After getting the output I wanted to
            pretty print the data rather than show only text, so I learned HTML
            and CSS. You can check out my open source projects as displayed on
            the home page <a herf="https://github.com/ringoMar/">here</a>.
          </p>
          <p className="rin-aboutme text-white">
            Well that’s it. Thank you for getting to know me, good luck trying
            to edit the photo to see my face. Below I will link some other
            information about me and fun facts.
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
      <div className="pushed-"></div>
      <div className="rin-aboutcard row d-flex">
        <div className="col-sm-6">
          <h3 className="float-left" variant="primary">
            PROGRAMS I USE
          </h3>
          <hr className="hr-color-up" />
        </div>
      </div>
      <CardGroup>
        <Card bg="dark" variant="dark">
          <Lazyload placeholder={<LoadRin />} throttle={200}>
            <Card.Img variant="top" src={g} />
          </Lazyload>
          <Card.Body>
            <Card.Title>GIMP</Card.Title>
            <Card.Text className="text-white">
              GIMP is a free and open-source raster graphics editor used for
              image manipulation. It’s the best replacement for Photoshop.
            </Card.Text>
            <Card.Link href="https://www.gimp.org/">Website</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              While Gimp is harder to get used it, its the best.
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark" variant="dark">
          <Lazyload placeholder={<LoadRin />} throttle={200}>
            <Card.Img variant="top" src={d} />
          </Lazyload>
          <Card.Body>
            <Card.Title>ShareX</Card.Title>
            <Card.Text className="text-white">
              ShareX is a free and open-source screenshot and screencast utility
              for Microsoft Windows.
            </Card.Text>
            <Card.Link href="https://getsharex.com/">Website</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              The amount of things this program can do is crazy
            </small>
          </Card.Footer>
        </Card>

        <Card bg="dark" variant="dark">
          <Lazyload placeholder={<LoadRin />} throttle={200}>
            <Card.Img variant="top" src={k} />
          </Lazyload>
          <Card.Body>
            <Card.Title>KDen Live </Card.Title>
            <Card.Text className="text-white">
              People who are looking for a very versatile video editing tool
              that comes packed with features should use Kden.
            </Card.Text>
          </Card.Body>
          <Card.Link href="https://kdenlive.org/">Website</Card.Link>
          <Card.Footer>
            <small className="text-muted">
              Best way to edit without all that mad thing
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card bg="dark" variant="dark">
          <Lazyload placeholder={<LoadRin />} throttle={200}>
            <Card.Img variant="top" src={v} />
          </Lazyload>
          <Card.Body>
            <Card.Title>Visual Studio Code</Card.Title>
            <Card.Text className="text-white">
              The best free source-code editor that has support for debugging,
              syntax highlighting, intelligent code completion, snippets, code
              refactoring, and embedded Git.
            </Card.Text>
            <Card.Link href="https://code.visualstudio.com/">Website</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Extensions: Prettier, Python, Code Stats, Discord Presense,
              Bracket Pair Colorizer, Babel JavsScript
            </small>
          </Card.Footer>
        </Card>

        <Card bg="dark" variant="dark">
          <Lazyload placeholder={<LoadRin />} throttle={200}>
            <Card.Img variant="top" src={b} />
          </Lazyload>
          <Card.Body>
            <Card.Title>Brave</Card.Title>
            <Card.Text className="text-white">
              Brave is a free and open-source web browser developed by Brave
              Software, Inc. based on the Chromium web browser. It blocks ads
              and website trackers.
            </Card.Text>
            <Card.Link href="https://brave.com/">Website</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">I use it all day any day.</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default abouters;
