interface IBaseComponentProps {
  tagName?: string;
  classList?: string[];
  template: string;
}

export default class BaseComponent {
  public element: HTMLElement;

  public constructor(props: IBaseComponentProps) {
    const { tagName = 'div', classList, template } = props;
    this.element = document.createElement(tagName);
    this.element.innerHTML = template;
    if (classList) {
      this.element.setAttribute('class', classList.join(' '));
    }
  }

  protected onMount = () => {};

  protected onUnmount = () => {};

  public mount = () => {
    this.onMount();
  };

  public unmount = () => {
    this.onUnmount();
  };
}
