import { colors } from "../resistor-color/resistor-color.js";

export const value = ([color1, color2]) => {
  return +`${colors[color1]}${colors[color2]}`;
};
