import React, { useState } from "react";
import "./App.css";
import { calculatePackage } from "./utils/calc";
import logo from "./assets/time_to_pack_logo.jpg";

export default function App() {
  const [complimentary, setComplimentary] = useState("with");
  const [people, setPeople] = useState(1);
  const [days, setDays] = useState(1);
  const [nights, setNights] = useState(1);
  const [transport, setTransport] = useState("bike");
  const [sharing, setSharing] = useState(1);

  const result = calculatePackage({
    people: Number(people),
    days: Number(days),
    nights: Number(nights),
    transport,
    sharing: Number(sharing),
    complimentary,
  });

  return (
    <div className="app">
      <div className="header">
  <img
    src={logo}
    alt="Time To Pack Logo"
    className="app-logo"
  />
  <h1>Time To Pack — Package Calculator</h1>
    </div>

      <div className="card">
        <div className="row">
          <label>No. of people</label>
          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        <div className="row">
          <label>No. of days</label>
          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        <div className="row">
          <label>No. of nights</label>
          <input
            type="number"
            min="1"
            value={nights}
            onChange={(e) => setNights(e.target.value)}
          />
        </div>

        <div className="row">
          <label>Transport</label>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          >
            <option value="bike">Bike</option>
            <option value="car">Car</option>
            <option value="tempo">Tempo Traveller</option>
          </select>
        </div>

        <div className="row">
          <label>Room sharing</label>
          <select
            value={sharing}
            onChange={(e) => setSharing(e.target.value)}
          >
            <option value="1">1 Sharing</option>
            <option value="2">2 Sharing</option>
            <option value="3">3 Sharing</option>
            <option value="4">4 Sharing</option>
            <option value="5">5 Sharing</option>
          </select>
        </div>

        <div className="row">
          <label>Complimentary</label>
          <div style={{ display: "flex", gap: "20px" }}>
            <label>
              <input
                type="radio"
                name="complimentary"
                value="with"
                checked={complimentary === "with"}
                onChange={(e) => setComplimentary(e.target.value)}
              />
              With
            </label>

            <label>
              <input
                type="radio"
                name="complimentary"
                value="without"
                checked={complimentary === "without"}
                onChange={(e) => setComplimentary(e.target.value)}
              />
              Without
            </label>
          </div>
        </div>

        <hr />

        <div className="results">
          <h2>Estimate</h2>

          <p>
            <strong>Total package:</strong> ₹{result.total.toFixed(2)}
          </p>

          <p>
            <strong>Per person:</strong> ₹{result.perPerson.toFixed(2)}
          </p>

          <p>
            <strong>Profit:</strong> ₹
            {result.profitFromPackage.toFixed(2)}
          </p>

          <ul>
            <li>
              Room stay: ₹{result.roomStayPrice.toFixed(2)}
            </li>
            <li>
              Room count: {result.roomsRequired}
            </li>
            <li>
              Transport ({result.vehicleType}): ₹
              {result.transport.toFixed(2)}
            </li>
            <li>
              Without complimentary: ₹
              {result.priceWithoutComplimentary.toFixed(2)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
