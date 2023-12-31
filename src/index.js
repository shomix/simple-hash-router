import React from "react";
import ReactDOM from "react-dom";
import { Link, HashRouter as Router, Route } from "react-router-dom";
import "./styles.css";

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

const InfoPage = () => {
  return <h3>Info Page</h3>;
};

function App() {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/info" component={InfoPage} />
      </Router>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
