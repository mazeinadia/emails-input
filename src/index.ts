import EmailsEditor, { IEmailsEditorOptions } from './components/EmailsEditor';
import IdGenerator from './services/idGenerator';

const idGenerator = new IdGenerator();

const EmailsInput = (
  containerEl: HTMLElement,
  options?: IEmailsEditorOptions
) => {
  if (!containerEl.appendChild || !containerEl.addEventListener) {
    console.error(
      'Container element must be "HTMLElement" and have "appendChild" and "addEventListener" method'
    );
    return null;
  }

  const namespace = `emails-input-q3nnHuTv21${idGenerator.next}`;
  const emailsInput = new EmailsEditor(containerEl, namespace, options || {});

  return emailsInput;
};

export default EmailsInput;
