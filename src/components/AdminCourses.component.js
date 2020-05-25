import React, { Component } from "react";
import "../css/style.css";
import Cookie from "js-cookie";

export default class AdminCourses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="addCourses">
        <div class="menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <div class="upperNav">
          <div class="search">
            <form class="searchForm">
              <input type="search" name="search" placeholder="Search" />
            </form>
            <button class="magnifier">
              <img src="../img/magnifier.png" class="manifierImg" />
            </button>
          </div>
          <div class="prevNext"></div>
        </div>
        <div class="addCoursesDownNav">
          <div class="typeOfCourses">
            <a class="blueBorder" id="marginZero" href="#">
              All courses
            </a>
          </div>
        </div>
        <div class="allCourses" id="allCourses">
          <table class="courses">
            <tbody>
              <tr class="info">
                <td>Course Code</td>
                <td>Course Name</td>
                <td>Credit</td>
                <td>Proffesor</td>
                <td>Prerequisites</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td class="title">CS103</td>
                <td>Introduction to Programming</td>
                <td>3 | 6</td>
                <td>Džejla Međedović</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">ELIT100</td>
                <td>Academic English and Effective Communication</td>
                <td>3 | 6</td>
                <td>Elmedin Zubović</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">MATH101</td>
                <td>Calculus I</td>
                <td>3 | 6</td>
                <td>Lejla Miller</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">NS112</td>
                <td>Understanding Science and Technology</td>
                <td>1.5 | 3</td>
                <td>Asif Šabanović</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div class="button">
                    <button>Delete</button>
                  </div>
                </td>
                <td>
                  <div class="button">
                    <button>Edit</button>
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
