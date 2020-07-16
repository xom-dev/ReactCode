import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./App.scss";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const handleOnClick = () => {
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
      history.push("/login");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <ul className="header__ul">
          <li className="header__ul-li">
            <Link className="header__ul-li-link" to="/">
              Home
            </Link>
          </li>
          <li className="header__ul-li">
            <Link className="header__ul-li-link" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="header__ul-li">
            <Link className="header__ul-li-link" to="/login">
              Login
            </Link>
          </li>
          <li className="header__ul-li">
            <Link className="header__ul-li-link" to="/sign-up">
              Sign Up
            </Link>
          </li>
          <li className="header__ul-li">
            <button onClick={handleOnClick} className="header__ul-li-btn">
              Log out
            </button>
          </li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
