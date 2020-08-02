import BaseComponent from '../Base';
import Email from '../Email';
import { generateRandomEmail } from '../../services/emailService';
import './styles.pcss';

const ENTER_KEY = 'Enter';
const COMMA_KEY = ',';

const CONTAINER_SELECTOR_POSTFIX = '-container';
const INPUT_SELECTOR_POSTFIX = '-input';
const HIDDEN_INPUT_SELECTOR_POSTFIX = '-hidden-input';
const ADD_EMAIL_SELECTOR_POSTFIX = '-add-email';
const GET_COUNT_SELECTOR_POSTFIX = '-get-count';

export interface IEmailsInputOptions {
  value?: string[];
  onChange?: (value: IValue[]) => void;
}

interface IValue {
  id: number;
  value: string;
  valid: boolean;
}

export default class EmailsInputComponent extends BaseComponent {
  private validEmailCounter = 0;
  private nextEmailPrimaryId = 0;

  private readonly namespace: string;
  private readonly initialValues?: string[];
  private readonly onChange?: (values: IValue[]) => void;
  private values: IValue[] = [];

  private addEmailButton: HTMLButtonElement | null;
  private getValidEmailsButton: HTMLButtonElement | null;
  private inputElement: HTMLTextAreaElement | null;
  private hiddenInputElement: HTMLDivElement | null;
  private containerElement: HTMLDivElement | null;

  constructor(namespace: string, options: IEmailsInputOptions) {
    super({
      classList: ['emails-input'],
      template:
        `<div class="content">` +
        `<h2 class="title">Share <b>Board name</b> with others</h2>` +
        `<div class="emails-container" id="${namespace}${CONTAINER_SELECTOR_POSTFIX}" data-cy="input-container">` +
        `<textarea class="input" id="${namespace}${INPUT_SELECTOR_POSTFIX}" placeholder="add more people..." data-cy="input"></textarea>` +
        `<div class="hidden-input-value" id="${namespace}${HIDDEN_INPUT_SELECTOR_POSTFIX}"></div> ` +
        `</div>` +
        `</div>` +
        `<div class="footer">` +
        `<button type="button" class="button" id="${namespace}${ADD_EMAIL_SELECTOR_POSTFIX}" data-cy="add-email">Add email</button>` +
        `<button type="button" class="button" id="${namespace}${GET_COUNT_SELECTOR_POSTFIX}" data-cy="get-valid">Get emails count</button>` +
        `</div>`,
    });

    this.namespace = namespace;
    this.initialValues = options.value;
    this.onChange = options.onChange;
  }

  public onMount = () => {
    this.addEmailButton = this.element.querySelector(
      `#${this.namespace}${ADD_EMAIL_SELECTOR_POSTFIX}`
    );
    this.getValidEmailsButton = this.element.querySelector(
      `#${this.namespace}${GET_COUNT_SELECTOR_POSTFIX}`
    );
    this.inputElement = this.element.querySelector(
      `#${this.namespace}${INPUT_SELECTOR_POSTFIX}`
    );
    this.hiddenInputElement = this.element.querySelector(
      `#${this.namespace}${HIDDEN_INPUT_SELECTOR_POSTFIX}`
    );
    this.containerElement = this.element.querySelector(
      `#${this.namespace}${CONTAINER_SELECTOR_POSTFIX}`
    );

    if (this.initialValues) {
      this.addArray(this.initialValues);
    }

    this.addEmailButton?.addEventListener('click', this.addRandomEmail);
    this.getValidEmailsButton?.addEventListener(
      'click',
      this.alertValidEmailCount
    );

    this.containerElement?.addEventListener(
      'click',
      this.handleEmailsContainerClick
    );

    this.inputElement?.addEventListener('paste', this.handlePaste);
    this.inputElement?.addEventListener('keydown', this.handleKeyDown);
    this.inputElement?.addEventListener('focusout', this.addInputValue);
    this.inputElement?.addEventListener('input', this.handleChangeInput);
  };

  public onUnmount = () => {
    this.addEmailButton?.removeEventListener('click', this.addRandomEmail);
    this.getValidEmailsButton?.removeEventListener(
      'click',
      this.alertValidEmailCount
    );

    this.containerElement?.removeEventListener(
      'click',
      this.handleEmailsContainerClick
    );

    this.inputElement?.removeEventListener('paste', this.handlePaste);
    this.inputElement?.removeEventListener('keydown', this.handleKeyDown);
    this.inputElement?.removeEventListener('focusout', this.addInputValue);
    this.inputElement?.removeEventListener('input', this.handleChangeInput);
  };

  alertValidEmailCount = () => {
    alert(`Valid emails count: ${this.validEmailCounter}`);
  };

  addRandomEmail = () => {
    this.addEmail(generateRandomEmail());
  };

  addEmail = (value?: string, invokeOnChange = true) => {
    if (!value) return;
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const newEmail = new Email(trimmedValue, this.nextEmailPrimaryId);
      this.values.push({
        id: this.nextEmailPrimaryId,
        value: trimmedValue,
        valid: newEmail.valid,
      });

      if (newEmail.valid) {
        this.validEmailCounter += 1;
      }

      this.nextEmailPrimaryId += 1;

      const newEmailEl = newEmail.element;
      if (!this.inputElement || !this.containerElement) return;
      this.containerElement.insertBefore(newEmailEl, this.inputElement);
      if (this.onChange && invokeOnChange) this.onChange(this.values);
    }
    if (this.inputElement) this.inputElement.value = '';
    this.handleResetInputSize();
  };

  private handleEmailsContainerClick = (event: MouseEvent) => {
    const { target } = event;
    // @ts-ignore
    if (target.getAttribute('class') === 'delete-email-button') {
      // @ts-ignore
      this.removeEmail(target);
      return;
    }
    // @ts-ignore
    if (target.getAttribute('id') === `${this.namespace}${CONTAINER_SELECTOR_POSTFIX}`) {
      this.inputElement?.focus();
    }
  };

  private removeEmail = (emailEl: HTMLElement) => {
    const removedEmailIdAttribute = emailEl.getAttribute('data-email-id');
    if (!removedEmailIdAttribute) return;

    const removedEmailId = parseInt(removedEmailIdAttribute, 10);
    if (isNaN(removedEmailId)) return;

    this.values = this.values.filter((value) => {
      if (value.id === removedEmailId) {
        // @ts-ignore
        this.containerElement?.removeChild(emailEl.parentElement);
        if (value.valid) this.validEmailCounter -= 1;
        return false;
      }
      return true;
    });

    if (this.onChange) this.onChange(this.values);
  };

  private addArray = (values: string[]) => {
    values.forEach((value) => this.addEmail(value, false));
    if (this.onChange) this.onChange(this.values);
  };

  private handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();
    const values = event.clipboardData?.getData('text/plain');
    if (!values) return;

    this.addArray(values.split(','));
  };

  private addInputValue = () => {
    this.addEmail(this.inputElement?.value);
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === ENTER_KEY || key === COMMA_KEY) {
      event.preventDefault();
      this.addInputValue();
    }
  };

  handleResetInputSize = () => {
    if (!this.inputElement) return;
    this.inputElement.style.width = '130px';
    this.inputElement.style.height = '24px';
  };

  handleChangeInput = () => {
    if (!this.inputElement || !this.hiddenInputElement) return;

    this.hiddenInputElement.innerText = this.inputElement.value;

    const hiddenInputWidth = this.hiddenInputElement.offsetWidth;
    const hiddenInputHeight = this.hiddenInputElement.offsetHeight;

    const inputWidth = this.inputElement.offsetWidth;
    const inputHeight = this.inputElement.offsetHeight;

    if (hiddenInputWidth <= 130 && inputWidth !== 130) {
      this.handleResetInputSize();
      return;
    }

    if (inputWidth !== hiddenInputWidth) {
      this.inputElement.style.width = `${hiddenInputWidth}px`;
    }

    if (inputHeight !== hiddenInputHeight) {
      this.inputElement.style.height = `${hiddenInputHeight}px`;
    }
    this.hiddenInputElement.innerText = '';
  };
}
