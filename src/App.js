import React, { useState } from 'react';
import './App.css';
import { calculatePackage } from './utils/calc';

export default function App() {
  const [complimentary, setComplimentary] = useState('with');
  const [people, setPeople] = useState(1);
  const [days, setDays] = useState(1);
    const [nights, setNights] = useState(1);
  const [transport, setTransport] = useState('bike');
  const [sharing, setSharing] = useState('1');
   const [roomcount, setRoomCount] = useState('1');

  const result = calculatePackage({ people: Number(people), days: Number(days), nights: Number(nights), transport, sharing: Number(sharing), roomcount: Number(roomcount), complimentary });

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
          <label>No. of nights</label>
          <input type="number" min="1" value={nights} onChange={e => setNights(e.target.value)} />
        </div>
        <div className="row">
          <label>Transport</label>
          <select value={transport} onChange={e => setTransport(e.target.value)}>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="tempo">Tempo Traveller</option>
          </select>
        </div>
        <div className="row">
          <label>Room count</label>
          <select value={roomcount} onChange={e => setRoomCount(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="row">
          <label>Room sharing</label>
          <select value={sharing} onChange={e => setSharing(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="row">
  <label>Complimentary</label>
  <div style={{ display: 'flex', gap: '20px' }}>
    <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <input
        type="radio"
        name="complimentary"
        value="with"
        checked={complimentary === 'with'}
        onChange={(e) => setComplimentary(e.target.value)}
      />
      With complimentary
    </label>

    <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <input
        type="radio"
        name="complimentary"
        value="without"
        checked={complimentary === 'without'}
        onChange={(e) => setComplimentary(e.target.value)}
      />
      Without complimentary
    </label>
  </div>
</div>
        <hr />
        <div className="results">
          <h2>Estimate</h2>
          <p><strong>Total package:</strong> ₹{result.total.toFixed(2)}</p>
          <p><strong>Per person:</strong> ₹{result.perPerson.toFixed(2)}</p>
          <p><strong>Profit:</strong> ₹{result.perPerson.toFixed(2)}</p>
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
