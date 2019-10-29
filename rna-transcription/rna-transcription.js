const dna = ['G', 'C', 'T', 'A'];
const rna = ['C', 'G', 'A', 'U'];

export const toRna = (input) => {
  return input.replace(/[GCTA]/g, x => rna[dna.indexOf(x)]);
};
