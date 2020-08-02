import EmailsInputComponent, {
  IEmailsInputOptions,
} from './components/EmailsInput';
import UniqueNamespaceGenerator from './services/namespaceGenerator';
import './styles.pcss';

const namespaceGenerator = new UniqueNamespaceGenerator();

const EmailsInput = (
  containerEl: HTMLElement,
  options?: IEmailsInputOptions
) => {
  if (typeof window !== 'object') {
    // todo check duck-type
    console.error(
      'Emails Input available only in browser with specified window object'
    );
    return null;
  }

  const namespace = namespaceGenerator.next;
  const emailsInput = new EmailsInputComponent(
    namespace,
    options || {}
  );
  const emailsInputEl = emailsInput.element;
  containerEl.appendChild(emailsInputEl);
  emailsInput.mount();
  containerEl.parentElement?.addEventListener('DOMNodeRemoved', function (e) {
    if (e.target === containerEl) {
      emailsInput.unmount();
    }
  });

  return emailsInputEl;
};

export default EmailsInput;
