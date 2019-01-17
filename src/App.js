import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About/index";
import NotFound from "./components/notFound";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-head">
          <NavBar />
        </div>

        <div class="hero-body">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/about" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <div class="hero-foot">
          <Footer />
        </div>
      </section>
    );
  }
}

export default App;
