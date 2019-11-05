const ALPHABET_LENGTH = 'abcdefghijklmnopqrstuvwxyz'.length;

export const isPangram = (input) => {
  const onlyLetters = input.trim().toLowerCase().split('').filter(x => x.match(/[a-z]/));
  return new Set(onlyLetters).size == ALPHABET_LENGTH;
};