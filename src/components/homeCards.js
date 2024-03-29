import { Card, CardColumns, CardDeck, Container } from 'react-bootstrap'

import Lazyload from 'react-lazyload'
import Re from './images/react.png'
import React from 'react'
import bq from './images/rinBQ.png'
import discordIco from './images/discord.png'
import git from './images/git.png'
import keto from './images/rinKeto.png'
import mcss from './images/mcss.png'
import mdb from './images/mdb.png'
import pop from './images/pop.png'
import twitchIco from './images/twitch.png'
import v from './images/svs.png'

function newbar() {
  return (
    <div>
      <Container fluid="md">
        <CardColumns>
          <Card bg="dark" variant="dark">
            <Lazyload throttle={200}>
              <Card.Img variant="top" src={twitchIco} />
            </Lazyload>
            <Card.Body>
              <Card.Title>Rin Bot — Twitch</Card.Title>
              <Card.Text className="text-white">
                Rin Bot Twitch bot is a multi-functional IRC chat bot. It was
                first designed to spam chat when subscriptions would come in, it
                would soon evolve into function based rather than text based
                commands for utility. Bringing its well known commands; weekly
                Sub and occasional Donation Goal but still bringing fun text
                commands. Rin bot was recently converted over from a python bot
                to a full typescript bot.
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
              <Card.Text className="text-white">
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
            <a href="https://github.com/RingoMar/BoardQuelle">
              <Card.Img variant="top" src={bq} />
            </a>
            <Card.Body>
              <Card.Title>BoardQuelle</Card.Title>
              <Card.Text className="text-white">
                BoardQuelle is a website created for a Twitch{' '}
                <a href="https://twitch.tv/zaquelle">streamer</a> to complie all
                of her werid noises.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <i className="ico-nav material-icons"> eco </i> This is a{' '}
                <a href="https://github.com/RingoMar/BoardQuelle">
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
              <a href="https://github.com/RingoMar/pookieKeto">
                <Card.Img variant="top" src={keto} />
              </a>
            </Lazyload>
            <Card.Body>
              <Card.Title>Rin Keto</Card.Title>
              <Card.Text className="text-white">
                Rin Keto is a website built to help a friend with her taking
                away the burden of "What CAN I eat today?" and turning it into
                "What SHOULD I eat today?"{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <i className="ico-nav material-icons"> eco </i> This is a{' '}
                <a href="https://github.com/RingoMar/pookieKeto">
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
                Pop Smoke (1999 - 2020){' '}
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
              <Card.Title>Spam Hearts </Card.Title>
              <Card.Text className="text-white">
                The first version of Rin Bot was a simple heart spam script for
                twitchchat. Ive made it noob friendly for anyone that wants to{' '}
                <a href="https://github.com/RingoMar/emotes-when-sub">use</a>{' '}
                it.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">modCheck</small>
            </Card.Footer>
          </Card>
          <Card bg="dark" variant="dark">
            <Card.Body>
              <Card.Title>Fun Fact</Card.Title>
              <Card.Text className="text-white">
                The word "Apple" in Japanese translate to "林檎". In spoken word
                it translate to "Ringo"
              </Card.Text>
              <Card.Text>
                <small className="text-muted">
                  Thanks to Bravo for finding this out.
                </small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" variant="dark">
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text className="text-white">
                <a href="../about">Click here</a> to learn all about me! Ringo!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Container>
      <Container fluid="xl" className="text-left justify-content-md-center">
        <h1 className="pushLil">
          Programming Languages
          <hr className="hr-color-up" />
        </h1>
        <CardDeck>
          <Card
            className="python"
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Python 3+</Card.Header>
          </Card>
          <Card
            className="javascript"
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">JavaScript</Card.Header>
          </Card>
          <Card
            className="typescript"
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Typescript</Card.Header>
          </Card>
          <Card
            className="go"
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Go Lang</Card.Header>
          </Card>
        </CardDeck>
        <h1 className="pushLil">
          Skills
          <hr className="hr-color-up" />
        </h1>
        <CardDeck>
          <Card
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">VS Code</Card.Header>
          </Card>
          <Card
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Git/Git Hub</Card.Header>
          </Card>
          <Card
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">React</Card.Header>
          </Card>
          <Card
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Mongo DB</Card.Header>
          </Card>
          <Card
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Materializecss</Card.Header>
          </Card>
          <Card
            bg="dark"
            variant="dark"
            border="dark"
            style={{ width: '18rem' }}
          >
            <Card.Header className="text-white">Bootstrap 4</Card.Header>
          </Card>
        </CardDeck>
      </Container>
    </div>
  )
}

export default newbar
