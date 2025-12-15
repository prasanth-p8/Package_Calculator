# Time To Pack — Package Calculator

Small React app that estimates tour package cost for a travel agency (sample/mock calculator).

Features
- Inputs: number of people, number of days, transport (car/bike), room sharing (3 or 4)
- Shows breakdown: base package, accommodation, transport, total, per person

Assumptions used in this sample (documented in UI):
- Base cost: ₹1000 per person per day
- Accommodation: 3-sharing room ₹1800/night, 4-sharing room ₹1600/night (split across occupants)
- Transport: Car ₹1200 per group flat, Bike ₹600 per group flat

Getting started (PowerShell)

```powershell
cd 'd:\PRASANTH\Projects\Package_Calculator'
# install dependencies
npm ci
# start dev server
npm start
# run tests
npm test
```

Notes
- This is a minimal, zero-backend sample for demonstration and testing. Feel free to tweak constants in `src/utils/calc.js` to match real rates.
