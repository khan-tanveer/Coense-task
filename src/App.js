import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Naavbar from "./Naavbar";
import AddUser from "./AddUser";
import ListUser from "./ListUser";
import EditUser from "./EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Naavbar />
        <Switch>
          <Route exact path="/" component={AddUser} />
          <Route exact path="/listuser" component={ListUser} />
          <Route
            exact
            path="/edituser/:id/:names/:emails/:numbers/:citys/:states/:countrys"
            // /:addresss/:citys/:states/:countrys
            component={EditUser}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
