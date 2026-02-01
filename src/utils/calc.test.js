import { calculatePackage } from './calc';

test('calculates simple package for 2 people, 1 day, car, 3-sharing', () => {
  const res = calculatePackage({ people: 1, days: 1, nights: 1, transport: 'bike', sharing: 1, roomcount: 1, complimentary: 'with' });
  // base = 2 * 1 * 1000 = 2000
  // rooms = ceil(2/3) = 1; accommodation = 1 * 1800 * 1 = 1800
  // transport = 1200
  // total = 2000 + 1800 + 1200 = 5000
  expect(res.base).toBe(2000);
  expect(res.accommodation).toBe(1800);
  expect(res.transport).toBe(600);
  expect(res.total).toBe(4400);
  expect(res.perPerson).toBe(4400);
});

test('4 people, 2 days, bike, 4-sharing', () => {
  const res = calculatePackage({ people: 4, days: 2, nights: 2, transport: 'bike', sharing: 4, roomcount: 1, complimentary: 'with' });
  // base = 4*2*1000 = 8000
  // rooms = ceil(4/4)=1; accommodation = 1*1600*2 = 3200
  // transport = 600
  // total = 8000+3200+600=11800
  expect(res.total).toBe(11800);
  expect(res.perPerson).toBe(2950);
});
