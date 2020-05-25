import React, { Component } from "react";
import "../css/style.css";
import axios from "axios";
import Cookie from "js-cookie";
import Magnifier from "../img/magnifier.png";

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);

    this.state = {
      data: [],
      page: 1,
    };
  }

  //Right before anything load the page this is called
  async componentDidMount() {
    await this.updateTable();
  }

  async updateTable() {
    const response = await fetch(
      "http://localhost:5000/courses?page=" +
        this.state.page +
        "&token=" +
        Cookie.get("token") +
        "&userId=" +
        Cookie.get("userId")
    );
    const res = await response.json();

    this.setState({
      data: res.array,
    });
  }

  async addCourses(e) {
    const added = {
      userId: Cookie.get("userId"),
      courseId: e,
    };
    axios
      .post("http://localhost:5000/users/setUserCourses", added)
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => alert("Error: " + err));
  }

  render() {
    return (
      <div className="addCourses">
        <div className="menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="upperNav">
          <div className="search">
            <form className="searchForm">
              <input type="search" name="search" placeholder="Search" />
            </form>
            <button className="magnifier">
              <img src={Magnifier} className="manifierImg" />
            </button>
          </div>
          <div className="prevNext">
            <button> P </button>
            <button> N </button>
          </div>
        </div>
        <div className="addCoursesDownNav">
          <div className="typeOfCourses">
            <a className="blueBorder" href="addCourses.html">
              All courses
            </a>
            <a href="mandatoryCourses.html">Mandatory courses</a>
            <a href="electiveCourses.html">Elective courses</a>
          </div>
        </div>
        <div className="allCourses" id="allCourses">
          <form className="allCoursesForm">
            <table className="courses">
              <tbody>
                <tr className="info">
                  <td>Course Code</td>
                  <td>Course Name</td>
                  <td>Professor</td>
                  <td>Faculty</td>
                  <td>Prerequisites</td>
                  <td>Add course</td>
                </tr>
                {this.state.data.map(function (item, i) {
                  return (
                    <tr key={i}>
                      <td className="title">{item.course_id}</td>
                      <td>
                        <a href={"https://ecampus.ius.edu.ba/" + item.Url}>
                          {item.course_name}
                        </a>
                      </td>
                      <td>{item.Lecturer}</td>
                      <td>{item.AcademicUnit}</td>
                      <td>
                        {item.prerequisite.map((item) => {
                          return item + " ";
                        })}
                      </td>
                      <td>
                        <div className="button">
                          <button onClick={this.addCourses(item.course_id)}>
                            Add Course
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
