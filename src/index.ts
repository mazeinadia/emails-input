import EmailsInputComponent, { IEmailsInputOptions } from './components/EmailsInput';
import './styles.pcss';
import {loadFont} from "./services/fonts";

let isFontsLoading = false;

export default function EmailsInput(containerEl: HTMLElement, options?: IEmailsInputOptions) {
  if (typeof window !== 'object') {
    // todo check duck-type
    console.error(
      'Emails Input available only in browser with specified window object'
    );
    return null;
  }

  function onDocumentReady(emailsInputEl: HTMLElement) {
    containerEl.appendChild(emailsInputEl);

    emailsInput.mount();
    containerEl.parentElement?.addEventListener('DOMNodeRemoved', function (e) {
      if (e.target === containerEl) {
        emailsInput.unmount();
      }
    });
    if (!isFontsLoading) loadFont();
  }

  const emailsInput = new EmailsInputComponent('jrgjbnjg', options || {});
  const emailsInputEl = emailsInput.element;
  if (document.readyState === 'loading') {
    document.onreadystatechange = function () {
      if (document.readyState == "interactive") {
        onDocumentReady(emailsInputEl);
      }
    }
  } else {
    onDocumentReady(emailsInputEl);
  }

  return emailsInputEl;
}
