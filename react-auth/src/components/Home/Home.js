import React from "react";
import { connect } from "react-redux";

export function Home(props) {
  const { loggingInProgress } = props;
  if (loggingInProgress) {
    return <div  data-test="loading">Loading...</div>;
  } else {
    return (
      <div className="homePage">
        <h1>Welcome to Synergy</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggingInProgress: state.auth.loggingInProgress,
  };
};

export default connect(mapStateToProps)(Home);
