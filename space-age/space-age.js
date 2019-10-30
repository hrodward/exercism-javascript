
const SECONDS_IN_YEAR = 60 * 60 * 24 * 365.25;
const period = new Map([['mercury', 0.2408467], ['venus', 0.61519726], ['earth', 1], ['mars', 1.8808158], ['jupiter', 11.862615], ['saturn', 29.447498], ['uranus', 84.016846], ['neptune', 164.79132]]);

export const age = (planet, ageInSeconds) => {
  return Math.round(ageInSeconds / SECONDS_IN_YEAR / period.get(planet) * 100) / 100;
};
