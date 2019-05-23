import React, { Component } from "react";
import { register } from "../UserFunctions/UserFunctions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    register(user).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <Typography
                variant="h4"
                component="h4"
                className="h3 mb-3 font-weight-normal"
              >
                Worksheet Generator Registration
              </Typography>
              <div className="form-group">
                {/* <label htmlFor="first_name">First Name</label> */}
                <TextField
                  // margin="normal"
                  // variant="filled"
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter Fist Name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="last_name">Last Name</label> */}
                <TextField
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter Last Name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="email">Email Address</label> */}
                <TextField
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <TextField
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="Secondary"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
