import React from "react";
import twitchIco from "./images/twitch.png";
import discordIco from "./images/discord.png";
import blankCard from "./images/blank.png";
import keto from "./images/rinKeto.png";
import pop from "./images/pop.png";
import dab from "./images/DaVinciDab.png";
import bq from "./images/rinBQ.png";
import Lazyload from "react-lazyload";
import {
  Button,
  Card,
  CardDeck,
  CardGroup,
  Container,
  CardColumns,
} from "react-bootstrap";

function newbar() {
  return (
    <Container fluid="md">
      <CardColumns>
        <Card bg="dark" variant="dark">
          <Lazyload throttle={200}>
            <Card.Img variant="top" src={twitchIco} />
          </Lazyload>
          <Card.Body>
            <Card.Title>Rin Bot — Twitch</Card.Title>
            <Card.Text>
              Rin Bot Twitch bot is a multi-functional IRC chat bot. It was
              first designed to spam chat when subscriptions would come in, it
              would soon evolve into function based rather than text based
              commands for utility. Bringing its well known commands; weekly Sub
              and occasional Donation Goal but still bringing fun text commands.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">RPGAyaya</small>
          </Card.Footer>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Img variant="top" src={discordIco} />
          <Card.Body>
            <Card.Title>Rin Bot — Discord</Card.Title>
            <Card.Text>
              Rin Bot Discord Bot is a multi-functional IRC chat bot with
              advanced Artificial Intelligence. This bot can be seen as a port
              between Twitch and Discord commands. This bot's goal is to
              establish a greater bots among humans connections with machine
              learning for subtle small talk.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              The same technology is being used to train neural networks to
              convert text into its emoji counterparts with discord reactions.
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Img variant="top" src={bq} />
          <Card.Body>
            <Card.Title>BoardQuelle</Card.Title>
            <Card.Text>
              BoardQuelle is a website created for a Twitch{" "}
              <a className="text-secondary" herf="twitch.tv/zaquelle">
                streamer
              </a>{" "}
              to complie all of her werid and NSFW song noises.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <i className="ico-nav material-icons"> eco </i> This is a{" "}
              <a herf="https://github.com/RingoMar/BoardQuelle">
                Open Source Project.
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark" variant="dark" className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>“Truth can only be found in one place: the code.”</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Robert C. Martin, Clean Code: A Handbook of Agile Software
                Craftsmanship
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card bg="dark" variant="dark">
          <Lazyload throttle={200}>
            <Card.Img variant="top" src={keto} />
          </Lazyload>
          <Card.Body>
            <Card.Title>Rin Keto</Card.Title>
            <Card.Text>
              Rin Keto is a websote built to help a friend with her taking away
              the burden of "What CAN I eat today?" and turning it into "What
              SHOULD I eat today?"{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <i className="ico-nav material-icons"> eco </i> This is a{" "}
              <a herf="https://github.com/RingoMar/pookieKeto">
                Open Source Project.
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark" variant="dark" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              I automate many of things and hardly take on big projects. While
              80% isn't out yet and are under development
            </p>
          </blockquote>
        </Card>
        <Card bg="dark" variant="dark">
          <Lazyload throttle={200}>
            <Card.Img src={pop} />
          </Lazyload>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Pop Smoke (1999 - 2020){" "}
              <cite title="Source Title">
                Living definition of "Get Rich or Die Trying"
              </cite>
            </small>
          </footer>
        </Card>
        <Card bg="dark" variant="dark" className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>You only as real as the people you surround yourself with.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Pop <cite title="Source Title">Smoke</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </Container>
  );
}

export default newbar;
