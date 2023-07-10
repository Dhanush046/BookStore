import React from "react";
// import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const eventformhandler = () => {
    console.log("hello");
  };
  const handleSubmit = () => {
    navigate("/shop");
  };
  return (
    <>
      <div className="main">
        <div className="left">
          <form onSubmit={handleSubmit} className="form">
            <div className="login">
              <h1 className="loginname">Login</h1>

              <div className="form-group">
                <label htmlFor="email" className="em">
                  E-mail:
                </label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="pw">
                  Password:
                </label>
                <input type="password" name="password" id="password" />
              </div>
              <button className="butn">
                <nav>
                  <ul>
                    <li>
                      log in
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
                </nav>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
