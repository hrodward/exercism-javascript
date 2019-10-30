const dictionary = {G: 'C' , C: 'G', T: 'A', A: 'U'};

export const toRna = (input) => {
  return input.split('').map(x => dictionary[x] || x).join('');
};
