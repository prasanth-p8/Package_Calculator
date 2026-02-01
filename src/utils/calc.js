// Calculation logic for package

export function calculatePackage({
  people = 1,
  days = 1,
  nights = 1,
  transport = "bike",
  sharing = 3,
  complimentary = "with",
}) {
  const PROFIT_PER_PERSON_PER_DAY = 500;
  const BASE_STAY_PRICE = 1000;

  const COMPLIMENTARY =
    complimentary === "with" ? days * 100 + 300 : 0;
    const Total_COMPLIMENTARY = COMPLIMENTARY * people;

  // ---------------- TRANSPORT LOGIC ----------------
  let transportCost = 0;
  let vehicleType = null;

  if (transport === "car") {
    if (people <= 4) {
      vehicleType = "4-seater";
      transportCost = 3000;
    } else if (people < 8) {
      vehicleType = "6-seater";
      transportCost = 4000;
    }
  } else if (transport === "bike") {
    vehicleType = "bike";
    transportCost = 500;
  } else if (transport === "tempo") {
    vehicleType = "tempo";
    transportCost = 5000;
  }

  // ---------------- VEHICLE COST ----------------
  let vehicleCost = 0;

  if (vehicleType === "bike") {
    vehicleCost = transportCost * Math.ceil(people / days);
  } else {
    vehicleCost = transportCost * days;
  }

  // ---------------- ROOM COST ----------------
  const stayPricePerRoom = BASE_STAY_PRICE * sharing;
  const roomsRequired = Math.ceil(people / sharing);
  const roomStayPrice = roomsRequired * stayPricePerRoom * nights;


  // ---------------- PROFIT ----------------
  const profitFromPackage =
    PROFIT_PER_PERSON_PER_DAY * people * days;

  // ---------------- TOTAL ----------------
  const total =
    roomStayPrice +
    vehicleCost +
    Total_COMPLIMENTARY +
    profitFromPackage;

  const perPerson = total / people;
  const priceWithoutComplimentary = total - Total_COMPLIMENTARY;

  return {
    total,
    perPerson,
    profitFromPackage,
    roomStayPrice,
    roomsRequired,
    transport: vehicleCost,
    vehicleType,
    priceWithoutComplimentary,
  };
}
