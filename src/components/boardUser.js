import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
        <Link to="/blog">Go to Blog </Link>
        
        </header>
      </div>
    );
  }
}