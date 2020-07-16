import React, { useState, useEffect } from "react";
import { getRates } from "../../api/api";
import "./Calculator.scss";

export default function Calculator(props) {
  const [values, setValues] = useState({
    rate: "",
    selectsFrom: "",
    selectsTo: "",
    inputValueTo: "",
    currencies: "USD",
  });

  const handleOnChangeFrom = (e) => {
    const target = e.target.value;
    currency.map((elem) => {
      if (elem[0] === target) {
        setValues({ ...values, selectsFrom: elem[1] });
        setValues({
          ...values,
          currencies: elem[0],
        });
      }
    });
  };

  const handleOnChangeTo = (e) => {
    const target = e.target.value;
    currency.map((elem) => {
      if (elem[0] === target) {
        setValues({ ...values, selectsTo: elem[1] });
      }
    });
  };

  const handleOnValue = () => {
    setValues({
      ...values,
      inputValueTo:
        values.selectsTo *
        document.querySelector(".calculator-from__input").value,
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      props.history.push("/login");
    } else {
      getRates(values.currencies)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setValues({ ...values, rate: data });
        })
        .catch((error) => console.error(error));
    }
  }, [values.currencies]);

  if (!values.rate) {
    return null;
  }

  let currency = Object.entries(values.rate.rates);

  return (
    <div className="calculator-wrapper">
      <div className="calculator-from">
        <select
          value={values.currencies}
          onChange={handleOnChangeFrom}
          className="calculator-from__select"
        >
          {currency.map((elem) => {
            return <option value={elem[0]}>{elem[0]}</option>;
          })}
        </select>

        <input
          className="calculator-from__input"
          type="number"
          onChange={handleOnValue}
        />
      </div>

      <div className="calculator-to">
        <select onChange={handleOnChangeTo} className="calculator-to__select">
          {currency.map((elem) => {
            return <option value={elem[0]}>{elem[0]}</option>;
          })}
        </select>

        <input type="number" disabled value={values.inputValueTo} />
      </div>
    </div>
  );
}
