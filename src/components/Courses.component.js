import React, { Component } from "react";
import "../css/style.css";
import axios from "axios";
import Cookie from "js-cookie";
import Magnifier from "../img/magnifier.png";

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);
    //this.onChangeCourses = this.onChangeCourses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    //this.changeLooks = this.changeLooks.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      data: [],
      page: 1,
      courseId: [],
      //course: "",
      userId: "",
      courseID: "",
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

  /*  onChangeCourse = (event) => {
    this.setState({ course: event.target.value });
  }; */

  onAddItem(course) {
    console.log("onAddItem stuff");
    console.log(course);
    this.setState((state) => {
      const courseId = [...state.courseId, course];
      return {
        courseId,
      };
    });
  }

  /*  onChangeCourses(e) {
    this.state.courses.push(e);
  } */

  onSubmit(e) {
    console.log("onSubmit stuff");
    console.log(this.state.courseId);
    e.preventDefault();
    const added = {
      userId: Cookie.get("userId"),
      courseId: this.state.courseId,
    };
    console.log(added); //ovde
    axios
      .post(
        "http://localhost:5000/users/addCourse?token=" +
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
  // Search impelmentation
  onSearch(e) {
    e.preventDefault();
    const added = {
      coursID: this.state.courseID,
    };
    axios
      .post(
        "http://localhost:5000/courses/search?token=" +
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

  /*  changeLooks(e) {
    var btn = document.querySelector(".downBtn");
    btn.style.background = "#292626";
  } */

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
          <form onSubmit={this.onSubmit} className="allCoursesForm">
            <div className="buttonAbove">
              <button id="coursesBtn">Confirm Selection</button>
            </div>
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
                {this.state.data.map((item, i) => {
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
                          <input
                            type="checkbox"
                            onClick={
                              () => this.onAddItem(item._id)
                              //this.changeLooks()
                            }
                          ></input>
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
