import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="notFoundPage">
      <h1>404</h1> <p>oopz.The page you are looking for doesnot exsists.</p>
      <div>Go back to   <Link to="/" className=" btn-link m-3" data-test="login">
          {" "}
          Login{" "}
        </Link> page</div>
    </div>
  );
}

export default NotFound;
