// Calculation logic for package

/**
 * calculatePackage inputs:
 * - people: number
 * - days: number
 * - transport: 'car' | 'bike'
 * - sharing: 3 | 4 (people per room)
 *
 * Returns breakdown: { base, accommodation, transport, total, perPerson }
 */
export function calculatePackage({
  people = 1,
  days = 1,
  nights = 1,
  transport = "bike",
  sharing = 1,
  roomcount = 1,
  complimentary = "with",
}) {
  const BASE_PER_PERSON_PER_DAY = 1000; // base package cost
  const STAY_PRICE = 2000; // base package cost
  const COMPLIMENTARY_DISCOUNT =
    complimentary === "with" ? days * 100 + 300 : 0;

  // accommodation per room per night (group cost); split equally by sharing
  const ACCOMMODATION_PER_ROOM = sharing === 3 ? 1800 : 1600; // 3-sharing room: 1800/night; 4-sharing: 1600/night

  // transport logic

  let transportCost = 0;
  let carType = null;

  if (transport === "car") {
    if (people <= 4) {
      carType = "4-seater";
      transportCost = 3000;
    } else {
      carType = "6-seater";
      transportCost = 4000;
    }
  } else if (transport === "bike") {
    carType = "bike";
    transportCost = 500;
  } else if (transport === "tempo") {
    carType = "tempo";
    transportCost = 5000;
  }

  const base = people * days * BASE_PER_PERSON_PER_DAY;

  // number of rooms needed = ceil(people / sharing)
  const rooms = Math.ceil(people / sharing);
  const accommodation = rooms * ACCOMMODATION_PER_ROOM * days;

  const total = base + accommodation + transportCost;
  const perPerson = total / people;

  return {
    base,
    accommodation,
    transport: transportCost,
    total,
    perPerson,
  };
}
