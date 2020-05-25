import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/style.css";
import Logo from "../img/IUSlogo2.png";
import Cookie from "js-cookie";
import axios from "axios";

const btnStyle = {
  margin: "5px",
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
      isLogin: false,
      user: "",
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "http://localhost:5000/users/" + Cookie.get("userID")
    );
    this.setState({
      user: Cookie.get("userID"),
    });
  }

  logout() {
    axios
      .get(
        "http://localhost:5000/users/logout?token=" +
          Cookie.get("token") +
          "&userId=" +
          Cookie.get("userId")
      )
      .then((res) => {
        Cookie.remove("token");
        Cookie.remove("userId");
        window.location = "/";
      })
      .catch((err) => {
        /*alert("Error: " + err);*/ //Very strange beacause we considere it has an error but it is not...
        Cookie.remove("token");
        Cookie.remove("userId");
        window.location = "/";
      });
  }

  render() {
    return (
      <nav className="navigation">
        <div className="logo">
          <img className="ius" src={Logo} />
          <span
            className="user"
            dangerouslySetInnerHTML={{ __html: this.state.user }}
          ></span>
        </div>
        <div className="upButtons">
          <div className="links">
            <Link id="home" to="/Home">
              <span data-hover="Home">Home</span>
            </Link>
            <Link id="MyCourses" to="/UserCourses">
              <span data-hover="MyCourses">My courses</span>
            </Link>
            <Link id="AddCourses" to="/Courses">
              <span data-hover="AddCourses">Add courses</span>
            </Link>
            <Link id="Schedule" to="/Schedule">
              <span data-hover="Schedule">Schedule</span>
            </Link>
          </div>
        </div>
        <div className="downButtons">
          <div className="links">
            <Link id="LogOut" to="/Login">
              <form>
                <button onClick={this.logout} data-hover="LogOut">
                  Log Out
                </button>
              </form>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
