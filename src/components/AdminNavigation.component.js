import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import Logo from "../img/IUSlogo2.png";
import Cookie from "js-cookie";
import axios from "axios";

const btnStyle = {
  margin: "5px",
};

export default class AdminNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navigation">
        <div className="logo">
          <img className="ius" src={Logo} />
          <span className="user">Administrator</span>
        </div>
        <div className="upButtons">
          <div className="links">
            <Link id="home" to="/AdminHome">
              <span data-hover="Home">Home</span>
            </Link>
            <Link id="MyCourses" to="/AdminCourses">
              <span data-hover="MyCourses">Courses</span>
            </Link>
            <Link id="AddCourses" to="/AdminStudents">
              <span data-hover="AddCourses">Students</span>
            </Link>
            <Link id="Schedule" to="/AdminStatistics">
              <span data-hover="Schedule">Statistics</span>
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
