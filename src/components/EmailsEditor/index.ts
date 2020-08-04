import BaseComponent from '../Base';
import Email from '../Email';
import IdGenerator from '../../services/idGenerator';
import styles from './styles.pcss';

const ENTER_KEY = 'Enter';
const COMMA_KEY = ',';

const CONTAINER_SELECTOR_POSTFIX = '-container';
const INPUT_SELECTOR_POSTFIX = '-input';
const HIDDEN_INPUT_SELECTOR_POSTFIX = '-hidden-input';

const HIDDEN_INPUT_MIN_WIDTH = 130;
const HIDDEN_INPUT_MIN_HEIGHT = 24;

export interface IEmailsEditorOptions {
  value?: string[];
  onChange?: (value: IValue[]) => void;
}

export interface IValue {
  id: number;
  value: string;
  valid: boolean;
}

export default class EmailsEditor extends BaseComponent {
  private validEmailCounter = 0;

  private nextEmailPrimaryIdGenerator: IdGenerator;

  private readonly namespace: string;

  private readonly initialValues?: string[];

  private readonly onChange?: (values: IValue[]) => void;

  private values: IValue[] = [];

  private inputElement: HTMLTextAreaElement | null;

  private hiddenInputElement: HTMLDivElement | null;

  private containerElement: HTMLDivElement | null;

  constructor(
    container: HTMLElement,
    namespace: string,
    options: IEmailsEditorOptions
  ) {
    super({
      container,
      className: styles['emails-input'],
      template:
        `<div class="${styles['input-container']}" id="${namespace}${CONTAINER_SELECTOR_POSTFIX}" data-cy="input-container">` +
        `<textarea class="${styles.input}" id="${namespace}${INPUT_SELECTOR_POSTFIX}" placeholder="add more people..." data-cy="input"></textarea>` +
        `<div class="${styles['hidden-input']}" id="${namespace}${HIDDEN_INPUT_SELECTOR_POSTFIX}"></div>` +
        '</div>',
    });

    this.namespace = namespace;
    this.initialValues = options.value;
    this.onChange = options.onChange;
    this.nextEmailPrimaryIdGenerator = new IdGenerator();

    this.onMount(namespace);
    container.addEventListener('DOMNodeRemovedFromDocument', () => {
      this.onUnmount();
    });
  }

  public get validEmailsCount() {
    return this.validEmailCounter;
  }

  private onMount = (namespace: string) => {
    this.inputElement = this.element.querySelector(
      `#${namespace}${INPUT_SELECTOR_POSTFIX}`
    );
    this.hiddenInputElement = this.element.querySelector(
      `#${namespace}${HIDDEN_INPUT_SELECTOR_POSTFIX}`
    );
    this.containerElement = this.element.querySelector(
      `#${namespace}${CONTAINER_SELECTOR_POSTFIX}`
    );

    if (this.initialValues) {
      this.addArray(this.initialValues);
    }

    this.containerElement?.addEventListener(
      'click',
      this.handleEmailsContainerClick
    );
    this.inputElement?.addEventListener('paste', this.handlePaste);
    this.inputElement?.addEventListener('keydown', this.handleKeyDown);
    this.inputElement?.addEventListener('focusout', this.addInputValue);
    this.inputElement?.addEventListener('input', this.handleChangeInput);
  };

  protected onUnmount = () => {
    this.containerElement?.removeEventListener(
      'click',
      this.handleEmailsContainerClick
    );
    this.inputElement?.removeEventListener('paste', this.handlePaste);
    this.inputElement?.removeEventListener('keydown', this.handleKeyDown);
    this.inputElement?.removeEventListener('focusout', this.addInputValue);
    this.inputElement?.removeEventListener('input', this.handleChangeInput);
  };

  public addEmail = (value?: string, invokeOnChange = true) => {
    if (!value) return;
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const id = this.nextEmailPrimaryIdGenerator.next;
      const newEmail = new Email(trimmedValue, id);
      this.values.push({
        id,
        value: trimmedValue,
        valid: newEmail.valid,
      });

      if (newEmail.valid) {
        this.validEmailCounter += 1;
      }

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

    if (!(target instanceof HTMLElement)) return;

    if (target.getAttribute('data-email-id')) {
      this.handelRemoveEmailClick(target);
      return;
    }
    if (
      target.getAttribute('id') ===
      `${this.namespace}${CONTAINER_SELECTOR_POSTFIX}`
    ) {
      this.inputElement?.focus();
    }
  };

  public removeEmail = (removedEmailId: number) => {
    if (!this.containerElement) return;
    const removedEmailDeleteButton = this.containerElement.querySelector(
      `[data-email-id="${removedEmailId}"]`
    );
    if (!removedEmailDeleteButton) return;

    this.values = this.values.filter((value) => {
      if (value.id === removedEmailId) {
        const emailElement = removedEmailDeleteButton.parentElement;
        if (!emailElement) return false;
        this.containerElement?.removeChild(emailElement);
        if (value.valid) this.validEmailCounter -= 1;
        return false;
      }
      return true;
    });

    if (this.onChange) this.onChange(this.values);
  };

  private handelRemoveEmailClick = (deleteEmailButton: HTMLElement) => {
    const removedEmailIdAttribute = deleteEmailButton.getAttribute(
      'data-email-id'
    );
    if (!removedEmailIdAttribute) return;

    const removedEmailId = parseInt(removedEmailIdAttribute, 10);
    if (isNaN(removedEmailId)) return;

    this.removeEmail(removedEmailId);
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

  private handleResetInputSize = () => {
    if (!this.inputElement) return;
    this.inputElement.style.width = `${HIDDEN_INPUT_MIN_WIDTH}px`;
    this.inputElement.style.height = `${HIDDEN_INPUT_MIN_HEIGHT}px`;
  };

  private handleChangeInput = () => {
    if (!this.inputElement || !this.hiddenInputElement) return;

    this.hiddenInputElement.innerText = this.inputElement.value;

    const hiddenInputWidth = this.hiddenInputElement.offsetWidth + 10; // to prevent text shift
    const hiddenInputHeight = this.hiddenInputElement.offsetHeight;

    const inputWidth = this.inputElement.offsetWidth;
    const inputHeight = this.inputElement.offsetHeight;

    if (hiddenInputWidth <= HIDDEN_INPUT_MIN_WIDTH) {
      if (inputWidth !== HIDDEN_INPUT_MIN_WIDTH) this.handleResetInputSize();
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
