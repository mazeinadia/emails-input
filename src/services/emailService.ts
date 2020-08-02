const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (value: string) => EMAIL_REGEX.test(value);

export const generateRandomEmail = () => {
  const name = generateName();
  const domain = generateDomain();
  return `${name}@${domain}`;
};

/***
 * @return integer between 1 and max
 */
const generateRandomNumber = (max: number) => Math.ceil(Math.random() * max);

enum SYMBOL {
  ALL = 'bcdfghjklmnprstvwzaeiou0123456789',
  LETTERS = 'bcdfghjklmnprstvwzaeiou',
  CONSONANTS = 'bcdfghjklmnprstvwz',
  CONSONANTS_NUMBER = 'bcdfghjklmnprstvwz0123456789',
  VOWELS = 'aeiou',
  VOWELS_NUMBER = 'aeiou0123456789',
  NUMBER = '0123456789',
}

const generateSymbol = (type: SYMBOL) => {
  const positionInSequence = generateRandomNumber(type.length - 1);
  return type[positionInSequence];
};

export const generateName = (maxLength = 20, ignoreDigits = false) => {
  const length = generateRandomNumber(maxLength);
  let nextSymbol = SYMBOL.LETTERS;
  let name = '';

  for (let i = 0; i < length; i += 1) {
    const newSymbol = generateSymbol(nextSymbol);
    name = name + newSymbol;

    if (SYMBOL.CONSONANTS.indexOf(newSymbol) !== -1) {
      if (ignoreDigits) nextSymbol = SYMBOL.VOWELS;
      else nextSymbol = SYMBOL.VOWELS_NUMBER;
      continue;
    }

    if (SYMBOL.VOWELS.indexOf(newSymbol) !== -1) {
      if (ignoreDigits) nextSymbol = SYMBOL.CONSONANTS;
      else nextSymbol = SYMBOL.CONSONANTS_NUMBER;
      continue;
    }
    
    if (SYMBOL.NUMBER.indexOf(newSymbol) !== -1) {
      nextSymbol = SYMBOL.ALL;
    }
  }

  return name;
};

const generateDomain = () => {
  const levels = generateRandomNumber(3);
  let domain = '';
  for (let levelCounter = 0; levelCounter < levels; levelCounter += 1) {
    domain = domain + generateName(10, true) + '.';
  }
  return domain + 'com';
};
