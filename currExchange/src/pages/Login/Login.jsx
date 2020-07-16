import React, { useState, useEffect } from "react";
import "./Login.scss";

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      props.history.push("/");
    }
  }, []);

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && password !== "") {
      console.log({
        name: name,
        password: password,
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name, id: Date.now() })
      );
      props.history.push("/");
    } else {
      console.log("Fill all inputs");
    }
  };

  return (
    <div className="login__wrapper">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="form__title">Login</h1>

        <input
          type="email"
          className="form__email"
          onChange={handleOnChangeName}
          placeholder="Enter your username"
        />
        <input
          type="password"
          className="form__password"
          onChange={handleOnChangePassword}
          placeholder="Enter your password"
        />

        <label className="form__label-remember">
          <input type="checkbox" />
          Remember me
        </label>

        <button className="form__submit">Login</button>
      </form>
    </div>
  );
}
