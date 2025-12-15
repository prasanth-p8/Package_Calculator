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
export function calculatePackage({ people = 1, days = 1, transport = 'car', sharing = 3 }) {
  const BASE_PER_PERSON_PER_DAY = 1000; // base package cost

  // accommodation per room per night (group cost); split equally by sharing
  const ACCOMMODATION_PER_ROOM = sharing === 3 ? 1800 : 1600; // 3-sharing room: 1800/night; 4-sharing: 1600/night

  // transport flat group cost
  const TRANSPORT_COST = transport === 'car' ? 1200 : 600;

  const base = people * days * BASE_PER_PERSON_PER_DAY;

  // number of rooms needed = ceil(people / sharing)
  const rooms = Math.ceil(people / sharing);
  const accommodation = rooms * ACCOMMODATION_PER_ROOM * days;

  const transportCost = TRANSPORT_COST; // flat per group

  const total = base + accommodation + transportCost;
  const perPerson = total / people;

  return {
    base,
    accommodation,
    transport: transportCost,
    total,
    perPerson
  };
}
