import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import SubHeader from "./components/SubHeader";
import About from "./components/About/index";
import NotFound from "./components/notFound";
import Footer from "./components/Footer";
import Contact from "./components/Contact/index";
import Header from "./components/Header";
import Home from "./components/Home/index";
import Menu from "./components/Menu/index";
import Wisdom from "./components/Wisdom/index";

class App extends Component {
  render() {
    return (
      <section className="hero-is-fullheight">
        <div className="hero-head">
          <Header />
          <SubHeader />
        </div>

        <div className="hero-body">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/wisdom" component={Wisdom} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    );
  }
}

export default App;
