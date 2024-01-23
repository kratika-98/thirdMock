import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Board from "./Board";
import Loginn from "./Loginn";
import OnboardDoctorPage from "./OnboardDoctor";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Board} />
        <Route path="/login" component={Loginn} />
        <Route path="/onboard-doctor" component={OnboardDoctorPage} />
      </Switch>
    </Router>
  );
};
export default AppRouter;