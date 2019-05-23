// Maintaining code as a backup renamed component as GoogleLogin 

import React from "react";
import HomePage from "../../../MainPages/HomePage/HomePage.js";
import UserPage from "../../../MainPages/UserPage";
import { GoogleLogin } from "react-google-login-component";
import Button from "@material-ui/core/Button";

class GoogleLogin extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayUserPage: false
    };
  }

  handleClick = () => {
    this.setState({ displayUserPage: !this.state.displayUserPage });
  };

  render() {
    return (
      <div className="loginbox">
        <GoogleLogin
          socialId="1073244498652-n2m4u3fru7io3pncs484c72qh35sp1u4.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          prompt="select_account"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
          onClick={this.handleClick}
        />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Test Switch
        </Button>
        <br></br><br></br>
        {this.state.displayUserPage ? <UserPage /> : <HomePage />}
      </div>

    );
  }
}

export default GoogleLogin;
