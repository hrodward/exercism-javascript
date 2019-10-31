const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (input) => {
  let onlyLetters = input.trim().toLowerCase().split('').filter(x => x.match(/[a-z]/)).join('');
  let regExp = new RegExp('[' + onlyLetters + ']');
  let remainingLetters = alphabet.filter(x => !x.match(regExp));
  return remainingLetters.length == 0;
};