import React, { useState, useEffect } from "react";
import { getRates } from "../../api/api";
import "./Home.scss";

export default function Home(props) {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      props.history.push("/login");
    } else {
      getRates("USD")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRate(data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  if (!rate) {
    return null;
  }

  return (
    <>
      <span className="rates__base">Base: USD</span>
      <ul className="rates">
        {Object.entries(rate.rates).map((elem, i) => {
          return elem[0] === "USD" ? null : (
            <li className="rates__li" key={i}>
              <span className="rates__li-span">{elem[0] + ": "}</span>
              <span className="rates__li-span">{elem[1].toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
