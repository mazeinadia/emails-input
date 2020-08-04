interface IBaseComponentProps {
  container?: HTMLElement;
  tagName?: string;
  className?: string;
  template: string;
}

export default class BaseComponent {
  private readonly rootElement: HTMLElement;

  public constructor(props: IBaseComponentProps) {
    const { container, tagName = 'div', className, template } = props;
    this.rootElement = document.createElement(tagName);
    this.rootElement.innerHTML = template;
    if (className) {
      this.rootElement.setAttribute('class', className);
    }

    if (container) {
      container.appendChild(this.rootElement);
    }
  }

  public get element() {
    return this.rootElement;
  }

  protected onUnmount = () => {};
}
