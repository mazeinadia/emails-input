import EmailsEditor, { IEmailsEditorOptions } from './components/EmailsEditor';
import IdGenerator from './services/idGenerator';

const idGenerator = new IdGenerator();

const EmailsInput = (
  containerEl: HTMLElement,
  options?: IEmailsEditorOptions
) => {
  if (typeof window !== 'object') {
    // todo check duck-type
    console.error(
      'Emails Input available only in browser with specified window object'
    );
    return null;
  }

  const namespace = `emails-input-q3nnHuTv21${idGenerator.next}`;
  const emailsInput = new EmailsEditor(containerEl, namespace, options || {});

  return emailsInput;
};

export default EmailsInput;
