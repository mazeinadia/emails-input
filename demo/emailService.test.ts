import {generateRandomEmail} from "./emailService";
import {validateEmail} from "../src/services/emailValidator";

describe('Random Email Generator', () => {
  it('generate different valid emails', () => {
    const emails: string[] = [];

    for (let i = 0; i < 20; i+=1) {
      const email = generateRandomEmail();
      expect(emails).not.toContain(email);
      expect(validateEmail(email)).toBeTruthy();
      emails.push(email);
    }
  })
});
