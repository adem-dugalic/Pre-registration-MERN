import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Cookie from "js-cookie";
import "../css/style.css";

export default class AdminStudents extends Component {
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
            <a class="blueBorder" id="marginZero" href="addCourses.html">
              All Students
            </a>
          </div>
        </div>
        <div class="allCourses" id="allCourses">
          <table class="courses">
            <tbody>
              <tr class="info">
                <td>ID</td>
                <td>Student Name</td>
                <td>Faculty</td>
                <td>Program</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td class="title">170302071</td>
                <td>Adem Dugalić</td>
                <td>FENS</td>
                <td>CSE</td>
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
                <td class="title">#######</td>
                <td>Axel Stefanini</td>
                <td>FENS</td>
                <td>CSE</td>
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
                <td class="title">170302###</td>
                <td>Lejla Mujakić</td>
                <td>FENS</td>
                <td>SE</td>
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
                <td class="title">170302022</td>
                <td>Tarik Muharem</td>
                <td>FENS</td>
                <td>SE</td>
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
                <td class="title">170302###</td>
                <td>Zinedin Hadžajlija</td>
                <td>FENS</td>
                <td>SE</td>
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
