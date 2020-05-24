import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";

import Navigation from "./components/navbar.component";
import Login from "./components/Login.component";
import SignUp from "./components/SignUp.component";
import Courses from "./components/Courses.component";
import UserCourses from "./components/UserCourses.component";
import Home from "./components/Home.component";
import Schedule from "./components/Schedule.component";

const containerStyle = {
  maxWidth: "100%",
  paddingLeft: "0px",
  paddingRight: "0px",
};

function App() {
  return (
    <Router>
      <div className="outerWrapper">
        <div className="wrapper">
          <Navigation />
          <Route path="/Home" component={Home} />
          <Route path="/Courses" component={Courses} />
          <Route path="/UserCourses" component={UserCourses} />
          <Route path="/Schedule" component={Schedule} />
        </div>
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
