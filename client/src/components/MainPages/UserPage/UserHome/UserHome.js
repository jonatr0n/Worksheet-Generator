import React from "react";
import QuickQuestion from "../../../Features/QuickQuestion/QuickQuestion";
import { connect } from "react-redux";
import ProfileInfo from "../../../Features/NavBar/ProfileInfo";

class UserHome extends React.Component {
  render() {
    return (
      <div className="userHome">
        <ProfileInfo />
        <br />
        <div>
          <QuickQuestion />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    equations: state.equations
  };
};

export default connect(mapStateToProps)(UserHome);
