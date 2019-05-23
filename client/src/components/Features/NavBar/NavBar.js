import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import HomePage from "../../MainPages/HomePage/HomePage";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import "../NavBar/NavBar.css";

const Wrapper = styled.ul`
  display: flex;
  margin-left: -40px;
`;

const StyledLink = styled(Link)`
  height: 40px;
  font-weight: bold;
  font-color: white;
  text-decoration: none;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;

  }
`;

class NavBarLogin extends Component {
  logOut(e) {
    e.preventDefault();
    // removes token from browser
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <div>
        <Button variant="contained" color="secondary" className="nav-item">
          <Link
            to="/login"
            className="nav-link"
            component="button"
            variant="body2"
          >
            LOGIN
          </Link>
        </Button>
        <Button variant="contained" color="secondary" className="nav-item">
          <Link
            to="/register"
            className="nav-link"
            component="button"
            variant="body2"
          >
            REGISTER
          </Link>
        </Button>
      </div>
    );
    const userLink = (
      <div>
        <Button variant="contained" color="secondary" className="nav-item">
          <Link
            to="/profile"
            className="nav-link"
            component="button"
            variant="body2"
          >
            CLICK TO START
          </Link>
        </Button>
        <Button variant="contained" color="secondary" className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            LOGOUT
          </a>
        </Button>
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbar1"
          >
            <StyledLink>
              <Wrapper className="navbar-nav">
                <Button
                  variant="contained"
                  color="secondary"
                  className="nav-item"
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </Button>
                {localStorage.usertoken ? userLink : loginRegLink}
              </Wrapper>
            </StyledLink>
          </div>
        </nav>
        <HomePage />
      </div>
    );
  }
}

export default withRouter(NavBarLogin);
