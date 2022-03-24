import React, {  useState } from "react";
import * as actions from "../../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
 
export function Registration(props) {
  const { register, reset, alert, potentialUser, alreadyAuser } = props;

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  /*----------- input handler to set input values-----------*/
  const handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUser((preState) => ({ ...preState, [name]: value }));
  };

  /*----------- submit the loginform to login -----------*/
  const handleSubmit = () => {
    setIsSubmitted(true);
    if (validateEmail() && user.userName && acceptTerms && user.password===confirmPassword) {
      register(user);
      document.getElementById("registrationForm").reset();
      setShowPass(false);
      setAcceptTerms(false);
      setIsSubmitted(false);
      setConfirmPassword("");
      setUser({
        userName: "",
        email: "",
        password: "",
      });
    }
  };


/*----------- validity check for email input -----------*/
  const validateEmail = () => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(user.email);
  };

  /*----------- accept terms and conditions -----------*/
  const terms = (e) => {
    if (e.target.checked) {
      setAcceptTerms(true);
    } else {
      setAcceptTerms(false);
    }
  };

    /*----------- show hid password -----------*/
  const togglePass = () => {
    setShowPass(!showPass);
  };

 

  return (
    <div className="center">
      <div className="register card">
        <h3 className="card-header  login-header">Register</h3>
        <div className="card-body">
          <form id="registrationForm">
            <div className="form-group">
              <input
                data-test="userName"
                type="text"
                value={user.userName}
                name="userName"
                placeholder="User Name"
                onChange={handleInput}
                className={
                  "form-control" +
                  (isSubmitted && !user.userName ? " is-invalid" : "")
                }
              />
              {isSubmitted && !user.userName ? (
                <span className="error ">
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>
                  This field is required.
                </span>
              ) : (
                <span></span>
              )}
            </div>

            <div className="form-group">
              <input
                data-test="email"
                type="text"
                name="email"
                value={potentialUser || user.email}
                // defaultValue={potentialUser || ""}
                placeholder="Email"
                onChange={handleInput}
                className={
                  "form-control" +
                  (isSubmitted && (!validateEmail() || !user.email)
                    ? " is-invalid"
                    : "")
                }
              />
              {isSubmitted && (!validateEmail() || !user.email) ? (
                <span className="error ">
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>
                  Email is not valid
                </span>
              ) : (
                <span></span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group col">
                <input
                  data-test="password"
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={user.password}
                  placeholder="Enter Password"
                  onChange={handleInput}
                  className={
                    "form-control" +
                    (isSubmitted && !user.password ? " is-invalid" : "")
                  }
                />
                {isSubmitted && !user.password ? (
                  <span className="error">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    This field is required.
                    <br />
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="form-group col showPass">
                <input
                  data-test="confirmPassword"
                  type={showPass ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={
                    "form-control" +
                    (user.password !== confirmPassword ? " is-invalid" : "")
                  }
                />

                {user.password !== confirmPassword ? (
                  <span className="error">
                    <i
                      className="fa fa-exclamation-triangle "
                      aria-hidden="true"
                    ></i>
                    Password missmatch
                    <br />
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="form-group form-check mt-2">
              <input
                data-test="showPassword"
                id="showPassword"
                type="checkbox"
                value={showPass}
                name="showPassword"
                onChange={togglePass}
                className={"form-check-input "}
              />
              <label htmlFor="showPassword" className="form-check-label">
                Show password
              </label>
            </div>

            <div className="form-group form-check mt-2">
              <input
                data-test="acceptTerms"
                id="acceptTerms"
                type="checkbox"
                value={acceptTerms}
                name="acceptTerms"
                onChange={terms}
                className={
                  "form-check-input " +
                  (!acceptTerms && isSubmitted ? " is-invalid" : "")
                }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Accept Terms & Conditions
              </label>
            </div>

            <div className="form-group">
              <div className="form-group col d-flex justify-content-center align-items-center">
                <button
                  className="myBtn btn btn-primary"
                  type="button"
                  value="Register"
                  onClick={handleSubmit}
                  data-test="register"
                >
                  {" "}
                  <span className="skew-fix">Register</span>{" "}
                </button>

                <Link to="/" className=" btn-link pr-0" data-test="cancle">
                  Cancle
                </Link>
              </div>
            </div>

            {alert && (
              <div className="form-row" data-test="alert-element">
                <div className="form-group col ">
                  <Alert>
                    {alert}
                    {alreadyAuser && (
                      <Link to="/" className=" btn-link pr-0" data-test="login">
                        Login
                      </Link>
                    )}
                  </Alert>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Link
        to="/FAQ"
        className=" faq-button btn-link pr-0"
        data-test="FAQ"
      ></Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    alert: state.auth.alert,
    potentialUser: state.auth.potentialUser,
    alreadyAuser: state.auth.alreadyAuser,
  };
};

export default connect(mapStateToProps, actions)(Registration);
