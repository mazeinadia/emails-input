import { validateEmail } from './emailValidator';

const VALID_EMAILS = [
  'joesmith@example.com',
  'joesmith.nospamplease@nospam.example.com',
  'firstname.lastname@example.com',
  'firstname+lastname@example.com',
  '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
];

const INVALID_EMAILS = [
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@111.222.333.44444',
  'email@example..com',
  'Abc..123@example.com',
  '”(),:;<>[\\]@example.com',
  'this\\ is"really"not\\allowed@example.com',
];

describe('email validation', () => {
  it(`returns "valid"(true) for valid email `, () => {
    VALID_EMAILS.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  it('returns "invalid"(false) for invalid emails', () => {
    INVALID_EMAILS.forEach((email) => {
      expect(validateEmail(email)).toBeFalsy();
    });
  });
});
