import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";

import Login from "./components/Login.component";
import SignUp from "./components/SignUp.component";
import Courses from "./components/Courses.component";
import UserCourses from "./components/UserCourses.component";
import Home from "./components/Home.component";
import Schedule from "./components/Schedule.component";

function App() {
  return (
    <Router>
      <div className="outerWrapper">
        <Route exact path="/" component={Login}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Schedule" component={Schedule}/>
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/UserCourses" component={UserCourses} />
        </div>
    </Router>
  );
}

export default App;
