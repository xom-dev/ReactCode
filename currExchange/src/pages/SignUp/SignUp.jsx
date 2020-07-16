import React, { useState, useEffect } from "react";
import "./SignUp.scss";

export default function SignUp(props) {
  const [values, setValues] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    telNumber: "",
  });

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      props.history.push("/");
    }
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      values.name !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.repeatedPass !== ""
    ) {
      if (values.repeatedPass === values.password) {
        console.log({
          name: values.name,
          email: values.email,
          password: values.password,
        });
        props.history.push("/");
      } else {
        console.log("Password are not same. Try again");
      }
    } else {
      console.log("Fill all inputs");
    }
  };

  return (
    <div className="sign-up__wrapper">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1>Sign Up</h1>

        <label className="form__label">
          Username
          <input
            type="email"
            onChange={(e) =>
              setValues({
                ...values,
                userName: e.target.value,
              })
            }
          />
        </label>

        <label className="form__label">
          First name
          <input
            type="text"
            onChange={(e) =>
              setValues({
                ...values,
                firstName: e.target.value,
              })
            }
          />
        </label>

        <label className="form__label">
          Last name
          <input
            type="text"
            onChange={(e) =>
              setValues({
                ...values,
                lastName: e.target.value,
              })
            }
          />
        </label>

        <label className="form__label">
          Password
          <input
            type="password"
            onChange={(e) =>
              setValues({
                ...values,
                password: e.target.value,
              })
            }
          />
        </label>

        <label className="form__label">
          Repeat password
          <input
            type="password"
            onChange={(e) =>
              setValues({
                ...values,
                repeatPassword: e.target.value,
              })
            }
          />
        </label>

        <label className="form__label">
          Telephone number
          <input
            type="tel"
            onChange={(e) =>
              setValues({
                ...values,
                telNumber: e.target.value,
              })
            }
          />
        </label>

        <div className="form__submit">
          <button className="form__submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
