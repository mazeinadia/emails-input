import { generateRandomEmail } from './emailService';
import './styles.pcss';

interface IEmailsEditor {
  addEmail: (value: string) => void;
  validEmailsCount: number;
}

export default function initShareBordForm (
  emailsInput: IEmailsEditor,
  addEmailButton: HTMLElement,
  getValidCountButton: HTMLElement) {

  function addRandomEmail () {
    emailsInput.addEmail(generateRandomEmail());
  }

  function alertValidEmailCount () {
    alert(`Valid emails count: ${emailsInput.validEmailsCount}`);
  }

  addEmailButton.addEventListener('click', addRandomEmail);
  getValidCountButton.addEventListener('click', alertValidEmailCount);
}
