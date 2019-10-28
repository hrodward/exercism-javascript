export const gigasecond = inputDate => {
  const GIGASECOND_IN_MS = 1000000000 * 1000;
  let offsetMs = Date.parse(inputDate) + GIGASECOND_IN_MS;
  return new Date(offsetMs);
};
