import BaseComponent from '../Base';
import { validateEmail } from '../../services/emailValidator';
import styles from './styles.pcss';

export default class Email extends BaseComponent {
  public readonly valid: boolean;

  constructor(value: string, id: number) {
    const valid = Email.validate(value);

    super({
      className: `${styles.email} ${
        valid ? styles["email--valid"] : styles["email--invalid"]
      }`,
      template:
        `<span class="${styles['email-value']}">${value}</span>` +
        `<button type="button" class="${styles['delete-email-button']}" data-email-id="${id}" data-cy="delete-email"></button>`,
    });

    this.valid = valid;
  }

  public static validate: (value: string) => boolean = (value) =>
    validateEmail(value);
}
