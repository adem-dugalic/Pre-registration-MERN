import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/style.css";

import Navigation from "./components/navbar.component";
import Login from "./components/Login.component";
import SignUp from "./components/SignUp.component";
import Courses from "./components/Courses.component";
import UserCourses from "./components/UserCourses.component";
import Home from "./components/Home.component";
import Schedule from "./components/Schedule.component";

function App() {
  return (
    <div className="outerWrapper">
      <Switch>
        <Route exact path="/">
          <Route component={Login} />
        </Route>
        <Route exact path="/Signup">
          <Route component={SignUp} />
        </Route>
        <div className="wrapper">
          <Route exact path="/Home">
            <Navigation />
            <Route exact component={Home} />
          </Route>
          <Route exact path="/Courses">
            <Navigation />
            <Route component={Courses} />
          </Route>
          <Route exact path="/UserCourses">
            <Navigation />
            <Route component={UserCourses} />
          </Route>
          <Route exact path="/Schedule">
            <Navigation />
            <Route component={Schedule} />
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
