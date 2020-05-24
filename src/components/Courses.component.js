import React, { Component } from "react";
import "../css/style.css";
import Cookie from "js-cookie";

export default class Courses extends Component {
  constructor(props) {
    super(props);
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
              <img src="../img/magnifier.png" className="manifierImg" />
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
          <table className="courses">
            <tbody>
              <tr className="info">
                <td>Course Code</td>
                <td>Course Name</td>
                <td>Credit</td>
                <td>Proffesor</td>
                <td>Prerequisites</td>
                <td>Add course</td>
              </tr>
              <tr>
                <td className="title">CS103</td>
                <td>Introduction to Programming</td>
                <td>3 | 6</td>
                <td>Džejla Međedović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">ELIT100</td>
                <td>Academic English and Effective Communication</td>
                <td>3 | 6</td>
                <td>Elmedin Zubović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">MATH101</td>
                <td>Calculus I</td>
                <td>3 | 6</td>
                <td>Lejla Miller</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">NS112</td>
                <td>Understanding Science and Technology</td>
                <td>1.5 | 3</td>
                <td>Asif Šabanović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
