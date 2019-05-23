import React, { Component } from 'react';
import { login } from '../UserFunctions/UserFunctions';
import UserPage from '.././../../MainPages/UserPage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUsername } from '../../../../redux/actions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
      email: this.state.email,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        this.props.saveUsername(user.email);
        this.props.history.push(<UserPage />);
        //if a user Login success and return to Home page ('/').
        this.props.history.push('/profile');
      }
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
                Please sign in
              </Typography>
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
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { saveUsername }
  )(Login)
);