export const gigasecond = inputDate => {
  const GIGASECOND_IN_MS = 1e12;
  let offsetMs = inputDate.getTime() + GIGASECOND_IN_MS;
  return new Date(offsetMs);
};
