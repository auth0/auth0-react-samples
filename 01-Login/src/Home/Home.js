import React, { Component } from "react";

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && (
          <h1 style={{ textAlign: "center" }}>You are logged in!</h1>
        )}
        {!isAuthenticated() && (
          <h1 style={{ textAlign: "center" }}>
            You are not logged in! Please{" "}
            <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
              Log In
            </a>{" "}
            to continue.
          </h1>
        )}
        <div style={{ margin: "auto", width: "100%" }}>
          <img
            src={require("./logos.png")}
            style={{
              margin: "auto",
              display: "block",
              width: "100%",
              maxWidth: "500px"
            }}
          />

          <h1 style={{ textAlign: "center", fontSize: "300%" }}>
            Auth0 + React Login Sample
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
