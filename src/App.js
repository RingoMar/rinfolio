import React from "react";
import HomepageImage from "./components/HomepageImage";
import Newbar from "./components/newbar";
import FooterNav from "./components/footer";
import AboutMe from "./components/aboutme";
import Cards from "./components/homeCards";
import PrivacyPolicy from "./components/prav";
import LoadRin from "./components/preloadspin";
import logo from "./rinIcon.png";
import lostNav from "./rin404.png";
import Spinner from "react-bootstrap/Spinner";
import Lazyload from "react-lazyload";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const Home = () => (
    <div className="App">
      <Newbar />
      <header className="App-header">
        <Lazyload placeholder={<LoadRin />} throttle={200}>
          <img src={logo} className="App-logo" alt="logo" />
        </Lazyload>
        <h1 className="App-link">RINGO MAR</h1>
      </header>
      <Cards />
      <div className="pushed-"></div>
      <FooterNav />
    </div>
  );

  const About = () => (
    <div className="App">
      <Newbar />
      <header className="App-header">
        <Lazyload placeholder={<LoadRin />} throttle={200}>
          <img src={logo} className="App-logo" alt="logo" />
        </Lazyload>
        <h1 className="App-link">RINGO MAR</h1>
      </header>
      <AboutMe />
      <div className="pushed-"></div>
      <FooterNav />
    </div>
  );

  const policy = () => (
    <div className="App">
      <Newbar />
      <div className="pushed-"></div>
      <PrivacyPolicy />
      <div className="pushed-"></div>
      <FooterNav />
    </div>
  );

  const rin = () => (
    <div className="App">
      <Newbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-link">RINGO MAR</h1>
      </header>
      <div className="pushed-"></div>
      <FooterNav />
    </div>
  );

  const NoMatchedRouteComponent = ({ location }) => (
    <div className="App">
      <Newbar />
      <header className="App-header">
        <img src={lostNav} className="App-lost-logo" alt="logo" />
        <h1>
          {" "}
          404 <code>{location.pathname}</code> NOT FOUND
        </h1>
      </header>
      <div className="pushed-"></div>
      <FooterNav />
    </div>
  );

  const Main = () => (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/rin" component={rin}></Route>
      <Route exact path="/privacy-policy" component={policy}></Route>
      <Route component={NoMatchedRouteComponent} />
    </Switch>
  );

  return (
    <div className="dynamicComponent">
      <Main />
    </div>
  );
}

export default App;
