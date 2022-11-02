import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Games from "./components/games";
import Register from "./components/register";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import GameForm from "./components/gameForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch className="navBar">
            <Route path="/login" component={LoginForm} />
            <Route path="/games/:id" component={GameForm} />
            <Route path="/games" component={Games} />
            <Redirect exact from="/" to="/games" />
            <Route path="/register" component={Register} />
            <Redirect to="/not-found" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
