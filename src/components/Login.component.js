import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Cookie from "js-cookie";
import "../css/style.css";
import "../css/main.css";
import "../css/util.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-logo">
                <img className="img" src="img/IUSlogo2.png" />
              </span>

              <span className="login100-form-title p-b-34 p-t-27">Log in</span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter ID"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="ID"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf207;"
                ></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf191;"
                ></span>
              </div>

              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>

              <div className="text-center p-t-90">
                <a className="txt1" href="register.html">
                  Don't have an account!? Register!
                </a>
              </div>
            </form>
          </div>
        </div>
        <div id="dropDownSelect1"></div>
      </div>
    );
  }
}
