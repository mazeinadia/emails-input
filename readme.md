# ✉️ Emails Input
Small js library with input for multiple emails.
## 🚀 [Demo](http://mazeinadia.github.io/emails-input/)
![view](./view.png)

Source code in [demo folder]()

---
## ⚙ Setup

### Install
Using `npm`

```bash
npm install 
```

### Add scripts

```html
<script src=""></script>
```

## ✉️ Usage

### Basic usage

```javascript
<div id="emails-input"></div> 
<script src="emails-input.js"></script> 
<script> 
    var inputContainerNode = document.querySelector('#emails-input'); 
    var emailsInput = EmailsInput(inputContainerNode, ...); 
</script>
```

### Advanced

### Browser supports
 - IE11+
 - Edge latest
 - Chrome latest
 - FF latest
 - Safari latest
 
## 💻 Devlopment
### Setup
Install all dependencies:

```bash
npm i
```
Run rollup and dev server in watch mode:

```bash
npm run dev
```
This will run local-server, build to dist directory and automatically refresh page on any changes (it loads content from demo folder).
 
### Testing
For integration tests you need to run dev server:
 ```bash
npm run dev
```
and run test with command:
```bash
npm run test
```

### [Design in Figma](https://www.figma.com/file/CWdAs3rN4d2gZpnoN7ZPvj/Share-test)