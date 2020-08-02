import BaseComponent from '../Base';
import { validateEmail } from '../../services/emailService';
import './styles.pcss';

export default class Email extends BaseComponent {
  public readonly valid: boolean;

  constructor(value: string, id: number) {
    const valid = Email.validate(value);

    super({
      classList: ['email', valid ? 'email--valid' : 'email--invalid'],
      template:
        `<span class="email-value">${value}</span>` +
        `<button type="button" class="delete-email-button" data-email-id="${id}"></button>`,
    });

    this.valid = valid;
  }

  public static validate: (value: string) => boolean = (value) => validateEmail(value);
}
