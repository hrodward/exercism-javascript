const ALPHABET_LENGTH = 'abcdefghijklmnopqrstuvwxyz'.length;

export const isPangram = (input) => {
  const onlyLetters = input.trim().toLowerCase().match(/[a-z]/g);
  return new Set(onlyLetters).size == ALPHABET_LENGTH;
};