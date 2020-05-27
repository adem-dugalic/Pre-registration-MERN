import React, { Component } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";
import Magnifier from "../img/magnifier.png";

export default class UserCoursesCurrect extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);
    //this.onChangeCourses = this.onChangeCourses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      data: [],
      course: "",
      userId: Cookie.get("userId"),
    };
  }

  //Right before anything load the page this is called
  async componentDidMount() {
    await this.updateTable();
    console.log(this.state.data);
  }

  async updateTable() {
    const userId = this.state.userId;
    console.log(this.state.userId);
    axios
      .get(
        "http://localhost:5000/users/userCourse?token=" +
          Cookie.get("token") +
          "&userId=" +
          Cookie.get("userId"),
        userId
        //userIDDD
      )
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch((err) => alert("Error: " + err));

    console.log(this.state.data);

    /*     const response = await fetch(
      "http://localhost:5000/users/getUserCourse?token=" +
        Cookie.get("token") +
        "&userId=" +
        Cookie.get("userId")
    );
    const res = await response.json();

    this.setState({
      data: res.array,
    }); */
  }

  onDelete(e) {
    this.setState({
      course: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const added = {
      userId: Cookie.get("userId"),
      courses: this.state.courses,
    };
    axios
      .post(
        "http://localhost:5000/users/setUserCourses?token=" +
          Cookie.get("token") +
          "&userId=" +
          Cookie.get("userId"),
        added
      )
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => alert("Error: " + err));
  }

  render() {
    return (
      <div className="myCourses">
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
            <button>P</button>
            <button>N</button>
          </div>
        </div>
        <div className="downNav">
          <div className="passedCurrent">
            <Link id="passedC" to="/UserCourses">
              Passed courses
            </Link>
            <a id="currentC">Current courses</a>
          </div>
        </div>
        <div className="passedCourses">
          <table className="semester">
            <thead>
              <tr>
                <th className="semesterNum" colSpan="5">
                  Taken Courses
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="info">
                <td>Course Code</td>
                <td>Course Name</td>
                <td>Pofessor</td>
                <td>Academic Unit</td>
                <td>Pre req</td>
              </tr>
              {Array.isArray(this.state.data) &&
                this.state.data.map((item, i) => {
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
                          <button onClick={() => this.onDelete(item.course_id)}>
                            Remove Course
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
