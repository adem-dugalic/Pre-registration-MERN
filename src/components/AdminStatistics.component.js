import React, { Component } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import "../css/style.css";

export default class AdminStatistics extends Component {
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
              Statistics
            </a>
          </div>
        </div>
        <div class="Statistics">
          <div class="cards">
            <div class="courseCard">
              <span class="cardId">CS308</span>
              <span class="cardName" id="Border">
                Software Engineering
              </span>
              <span class="cardProfessor">Kanita Hadžiabdić</span>
            </div>
            <div class="courseCard">
              <span class="cardId">ELIT200</span>
              <span class="cardName" id="Border">
                Critical reading and writting
              </span>
              <span class="cardProfessor">Lamija Lagundžija</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
