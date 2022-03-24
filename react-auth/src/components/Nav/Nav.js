import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/authActions";
import { getGreetingTime } from "../../Utils";



export function Nav(props) {
  const { logout, isAuthenticated, userName } = props;
  return (
    <div className="header">
      <div className="logout">
        {isAuthenticated && (
          <>
            <div className="mx-3"  data-test="greeting">{getGreetingTime() + " " + userName}</div>
            <div className="logoutBtn"  data-test="logout" onClick={logout}>
              LogOut
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.user.userName,
    isAuthenticated: state.auth.isAuthenticated,
   
  };
};

export default connect(mapStateToProps, actions)(Nav);
