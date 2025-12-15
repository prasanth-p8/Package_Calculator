import React, { useState } from 'react';
import './App.css';
import { calculatePackage } from './utils/calc';

export default function App() {
  const [people, setPeople] = useState(2);
  const [days, setDays] = useState(3);
  const [transport, setTransport] = useState('car');
  const [sharing, setSharing] = useState('3');

  const result = calculatePackage({ people: Number(people), days: Number(days), transport, sharing: Number(sharing) });

  return (
    <div className="app">
      <h1>Time To Pack — Package Calculator</h1>
      <div className="card">
        <div className="row">
          <label>No. of people</label>
          <input type="number" min="1" value={people} onChange={e => setPeople(e.target.value)} />
        </div>
        <div className="row">
          <label>No. of days</label>
          <input type="number" min="1" value={days} onChange={e => setDays(e.target.value)} />
        </div>
        <div className="row">
          <label>Transport</label>
          <select value={transport} onChange={e => setTransport(e.target.value)}>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>
        <div className="row">
          <label>Room sharing</label>
          <select value={sharing} onChange={e => setSharing(e.target.value)}>
            <option value="3">3 sharing</option>
            <option value="4">4 sharing</option>
          </select>
        </div>
        <hr />
        <div className="results">
          <h2>Estimate</h2>
          <p><strong>Total package:</strong> ₹{result.total.toFixed(2)}</p>
          <p><strong>Per person:</strong> ₹{result.perPerson.toFixed(2)}</p>
          <ul>
            <li>Accommodation: ₹{result.accommodation.toFixed(2)}</li>
            <li>Transport: ₹{result.transport.toFixed(2)}</li>
            <li>Base package: ₹{result.base.toFixed(2)}</li>
          </ul>
        </div>
      </div>

      <footer className="note">
        <strong>Assumptions:</strong> base cost ₹1000/person/day, accommodation ₹600/night for 3-sharing room (split equally), ₹500/night for 4-sharing (split equally). Car ₹1200 flat per group, Bike ₹600 flat per group.
      </footer>
    </div>
  );
}
