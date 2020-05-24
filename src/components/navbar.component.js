import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  }

  render() {
    return (
      <nav className="navigation">
        <div className="logo">
          <img className="ius" src={Logo} />
          <span className="user">Adem Dugalić</span>
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
              <span data-hover="LogOut">Log Out</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
