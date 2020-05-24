import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

import "../css/style.css";
import "../css/main.css";
import "../css/util.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form validate-form">
              <span class="login100-form-logo">
                <img class="img" src="img/IUSlogo2.png" />
              </span>

              <span class="login100-form-title p-b-34 p-t-27">Register</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Enter ID"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  placeholder="ID"
                />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Confirm password"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Confirm password"
                />
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div class="contact100-form-checkbox">
                <input
                  class="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">Login</button>
              </div>

              <div class="text-center p-t-90">
                <a class="txt1" href="index.html">
                  Have an account!? Log in now!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
