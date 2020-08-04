# ✉️ Emails Input
Small js library with input for multiple emails.
## 🚀 [Demo](http://mazeinadia.github.io/emails-input/)
![view](./view.png)

Source code in [demo folder]()

---
## ⚙ Setup

### Add script

```html
<script src="emails-input.js"></script>
```

## ✉️ Usage

### Basic usage

```javascript
<div id="emails-input"></div> 
<script src="emails-input.js"></script> 
<script> 
    var inputContainerNode = document.querySelector('#emails-input'); 
    var emailsInput = EmailsInput(inputContainerNode); 
</script>
```

### Advanced

emailInput = EmailsInput(container, options);

Parameters:

| parameter | required | type | description | example |
|---|---|---|---|---|
| container | + | HTMLElement | element to wrap Emails Input | document.querySelector('body') |
| options | - |  |  |  |
| options.value | - | string[] |  | ['john@gmail.com'] |
| options.onChange | - | ({ id: number, value: string, valid: boolean }[]) => void | callback for change Emails Input value | (values) => { console.log(values) } |

Return value structure:
| name | type | description |
|---|---|---|
| element | HTMLElement | EmailsInput root HTML-element |
| validEmailsCount | number | count of valid emails in EmailsInput |
| addEmail | (value: string) => void | method for adding new value in EmailsInput |

### Browser supports
 - IE11+
 - Edge latest
 - Chrome latest
 - FF latest
 - Safari latest
 
## 💻 Development
### Setup
Install all dependencies:

```bash
npm i
```
Run rollup and dev server in watch mode:

```bash
npm run dev
npm run demo:start
```
This will run local dev-server, build to dist directory and automatically open demo page.
 
### Testing
For integration tests you need to run dev server:
 ```bash
npm run demo:start
```
and run test with command:
```bash
npm run test:int
```

For unit tests you need to npx installed, to run test:
```bash
npm run test:unit
```

### [Design in Figma](https://www.figma.com/file/CWdAs3rN4d2gZpnoN7ZPvj/Share-test)

### TO DO:
 - review unmount in components
 - create package in github