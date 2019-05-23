import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Wrapper = styled.tbody`
  margin-left: 10px;
`;

class ProfileInfo extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
  }
  // session token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IllvdW5nIiwibGFzdF9uYW1lIjoiQ2hvIiwiZW1haWwiOiJ5b3VuZ3RhZTEzODZAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcDlvL1ZhdzN3RjdyUlE1b0hYakpsT0Jmbk1sNVBCWXdMendnM2ZLMkd3RElEeXRwWG1xbW0iLCJjcmVhdGVkIjoiMjAxOS0wNS0wNCIsImlhdCI6MTU1Njk1Mjg4MSwiZXhwIjoxNTU2OTU0MzIxfQ.sDALvFS9UIzKL9BGZbpCgv-sMZHVHht26VvWi5UaH5Y
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Typography variant="h4" component="h4">
            Profile
          </Typography>
          <br />
          <tbody>
            <Typography variant="p" component="p">
              <tr>
                <td>First Name:</td>
                <br />
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <br />
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <br />
                <td>{this.state.email}</td>
              </tr>
            </Typography>
          </tbody>
        </Wrapper>
      </div>
    );
  }
}

export default ProfileInfo;
