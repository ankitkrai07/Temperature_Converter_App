import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import "../css/TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const handleCelsiusChange = (e) => {
    const cTemp = Number(e.target.value);
    setCelsius(cTemp);
    setFahrenheit(((cTemp * 9) / 5 + 32).toFixed(2));
    setKelvin((cTemp + 273.15).toFixed(2));
    e.target.classList.add("input-animation"); // Apply animation class
    setTimeout(() => {
      e.target.classList.remove("input-animation"); // Remove animation class after animation completes
    }, 500);
  };

  const handleFahrenheitChange = (e) => {
    const fTemp = Number(e.target.value);
    setFahrenheit(fTemp);
    setCelsius(((fTemp - 32) * (5 / 9)).toFixed(2));
    setKelvin(((fTemp - 32) * (5 / 9) + 273.15).toFixed(2));
    e.target.classList.add("input-animation"); // Apply animation class
    setTimeout(() => {
      e.target.classList.remove("input-animation"); // Remove animation class after animation completes
    }, 500);
  };

  const handleKelvinChange = (e) => {
    const kTemp = Number(e.target.value);
    setKelvin(kTemp);
    setCelsius((kTemp - 273.15).toFixed(2));
    setFahrenheit(((kTemp - 273.15) * (9 / 5) + 32).toFixed(2));
    e.target.classList.add("input-animation"); // Apply animation class
    setTimeout(() => {
      e.target.classList.remove("input-animation"); // Remove animation class after animation completes
    }, 500);
  };

  const handleClear = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Temperature Converter</h1>
        <span className="Temperature-icon">
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
        </span>
      </div>

      {/* <div className="title">
        <h1>Temperature Converter</h1>
        <span className="Temperature-icon">&#8451;</span>
      </div> */}

      <div id="celsius">
        <input
          type="number"
          placeholder="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <span className="icon">&#8451;</span>
      </div>
      <div id="fahrenheit">
        <input
          type="number"
          placeholder="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
        <span className="icon">&#8457;</span>
      </div>
      <div id="kelvin">
        <input
          type="number"
          placeholder="Kelvin"
          value={kelvin}
          onChange={handleKelvinChange}
        />
        <span className="icon">&#8490;</span>
      </div>

      <div className="button">
        <button onClick={handleClear}>All Clear</button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
