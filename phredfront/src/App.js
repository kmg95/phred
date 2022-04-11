import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AddObj } from "./components/AddObj.component";
import { ObjList } from "./components/ObjList.component";
import { UpdateObj } from "./components/UpdateObj.component";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          Environment data
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link exact to={"/add/"} className="nav-link">
              Add
            </Link>
            </li>
            <li className="nav-item">
            <Link exact to={"/core/"} className="nav-link">
              List
              </Link>
              </li>
              <li className="nav-item">
              <Link exact to={"/core/:id/update/"} className="nav-link">
              Update
              </Link>
          </li>
        </div>
      </nav>
      <div className="container m-10">
      <Switch>
          <Route exact path={["/", "/core"]} component={ObjList} />
          <Route exact path="/add/" component={AddObj} />
          <Route path="/core/:id/update/" component={UpdateObj} />
    </Switch>
      </div>
    </div>
  );
}

export default App;