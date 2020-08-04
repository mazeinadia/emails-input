var EmailsInput=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};function t(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var n=function(){function e(e){var t,n=this;this.onUnmount=function(){};var i=e.container,l=e.tagName,a=void 0===l?"div":l,r=e.className,o=e.template;this.rootElement=document.createElement(a),this.rootElement.innerHTML=o,r&&this.rootElement.setAttribute("class",r),i&&(i.appendChild(this.rootElement),null===(t=i.parentElement)||void 0===t||t.addEventListener("DOMNodeRemoved",(function(e){e.target===i&&n.onUnmount()})))}return Object.defineProperty(e.prototype,"element",{get:function(){return this.rootElement},enumerable:!1,configurable:!0}),e}(),i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var a="styles_email__3ZbrJ",r="styles_email--valid__RtIDx",o="styles_email--invalid__2DMps",s="styles_delete-email-button__3bJ9b",u="styles_email-value__3y_Mf";l(".styles_email__3ZbrJ{display:flex;height:24px;max-width:calc(100% - 14px);line-height:24px;margin:0 8px 4px 0!important}.styles_email__3ZbrJ.styles_email--valid__RtIDx{background-color:rgba(102,153,255,.2);border-radius:100px;padding-left:10px}.styles_email__3ZbrJ.styles_email--invalid__2DMps{border-bottom:1px dashed #d92929}.styles_email__3ZbrJ.styles_email--invalid__2DMps .styles_delete-email-button__3bJ9b{padding-right:0;width:16px}.styles_email__3ZbrJ .styles_email-value__3y_Mf{max-width:100%;overflow:hidden;text-overflow:ellipsis}.styles_email__3ZbrJ .styles_delete-email-button__3bJ9b{padding:8px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 .8L7.2 0 4 3.2.8 0 0 .8 3.2 4 0 7.2l.8.8L4 4.8 7.2 8l.8-.8L4.8 4 8 .8z' fill='%23050038'/%3E%3C/svg%3E\") no-repeat 50%;width:24px;height:24px}");var d=function(e){function n(t,i){var l=this,d=n.validate(t);return(l=e.call(this,{className:a+" "+(d?r:o),template:'<span class="'+u+'">'+t+'</span><button type="button" class="'+s+'" data-email-id="'+i+'" data-cy="delete-email"></button>'})||this).valid=d,l}return t(n,e),n.validate=function(e){return function(e){return i.test(e)}(e)},n}(n),p=function(){function e(){this.counter=0}return Object.defineProperty(e.prototype,"next",{get:function(){return this.counter+=1,this.counter},enumerable:!1,configurable:!0}),e}(),m="styles_emails-input__2kCgS",c="styles_input-container__3_q5R",_="styles_input__1p0IN",v="styles_hidden-input__2dJmY";l('@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");.styles_emails-input__2kCgS{width:100%;height:100%;min-width:144px}.styles_emails-input__2kCgS b,.styles_emails-input__2kCgS button,.styles_emails-input__2kCgS div,.styles_emails-input__2kCgS h2,.styles_emails-input__2kCgS span,.styles_emails-input__2kCgS textarea{margin:0;padding:0;font-family:Open Sans,sans-serif;box-sizing:border-box}.styles_emails-input__2kCgS button,.styles_emails-input__2kCgS textarea{background-color:transparent;border:none;outline:none}.styles_emails-input__2kCgS button,.styles_emails-input__2kCgS span,.styles_emails-input__2kCgS textarea{line-height:24px;font-size:14px}.styles_emails-input__2kCgS button{cursor:pointer}.styles_emails-input__2kCgS textarea{resize:none}.styles_emails-input__2kCgS .styles_input-container__3_q5R{position:relative;display:flex;flex-wrap:wrap;align-content:flex-start;width:100%;height:100%;padding:8px 7px;overflow-y:auto;background:#fff;border:1px solid #c3c2cf;border-radius:4px;cursor:text}.styles_emails-input__2kCgS .styles_input__1p0IN{width:130px;min-width:130px;height:24px;overflow:hidden;line-height:24px}.styles_emails-input__2kCgS .styles_hidden-input__2dJmY{position:absolute;max-width:calc(100% - 14px);visibility:hidden;z-index:-1;word-wrap:break-word}');var h=function(e){function n(t,n,i){var l=e.call(this,{container:t,className:m,template:'<div class="'+c+'" id="'+n+'-container" data-cy="input-container"><textarea class="'+_+'" id="'+n+'-input" placeholder="add more people..." data-cy="input"></textarea><div class="'+v+'" id="'+n+'-hidden-input"></div></div>'})||this;return l.validEmailCounter=0,l.values=[],l.onMount=function(e){var t,n,i,a,r;console.log("mount",l.element.querySelector("#"+e+"-container")),l.inputElement=l.element.querySelector("#"+e+"-input"),l.hiddenInputElement=l.element.querySelector("#"+e+"-hidden-input"),l.containerElement=l.element.querySelector("#"+e+"-container"),l.initialValues&&l.addArray(l.initialValues),null===(t=l.containerElement)||void 0===t||t.addEventListener("click",l.handleEmailsContainerClick),null===(n=l.inputElement)||void 0===n||n.addEventListener("paste",l.handlePaste),null===(i=l.inputElement)||void 0===i||i.addEventListener("keydown",l.handleKeyDown),null===(a=l.inputElement)||void 0===a||a.addEventListener("focusout",l.addInputValue),null===(r=l.inputElement)||void 0===r||r.addEventListener("input",l.handleChangeInput)},l.onUnmount=function(){var e,t,n,i,a;null===(e=l.containerElement)||void 0===e||e.removeEventListener("click",l.handleEmailsContainerClick),null===(t=l.inputElement)||void 0===t||t.removeEventListener("paste",l.handlePaste),null===(n=l.inputElement)||void 0===n||n.removeEventListener("keydown",l.handleKeyDown),null===(i=l.inputElement)||void 0===i||i.removeEventListener("focusout",l.addInputValue),null===(a=l.inputElement)||void 0===a||a.removeEventListener("input",l.handleChangeInput)},l.addEmail=function(e,t){if(void 0===t&&(t=!0),e){var n=e.trim();if(n){var i=l.nextEmailPrimaryIdGenerator.next,a=new d(n,i);l.values.push({id:i,value:n,valid:a.valid}),a.valid&&(l.validEmailCounter+=1);var r=a.element;if(!l.inputElement||!l.containerElement)return;l.containerElement.insertBefore(r,l.inputElement),l.onChange&&t&&l.onChange(l.values)}l.inputElement&&(l.inputElement.value=""),l.handleResetInputSize()}},l.handleEmailsContainerClick=function(e){var t,n=e.target;n.getAttribute("data-email-id")?l.handelRemoveEmailClick(n):n.getAttribute("id")===l.namespace+"-container"&&(null===(t=l.inputElement)||void 0===t||t.focus())},l.removeEmail=function(e){if(l.containerElement){var t=l.containerElement.querySelector('[data-email-id="'+e+'"]');t&&(l.values=l.values.filter((function(n){var i;if(n.id===e){var a=t.parentElement;return!!a&&(null===(i=l.containerElement)||void 0===i||i.removeChild(a),n.valid&&(l.validEmailCounter-=1),!1)}return!0})),l.onChange&&l.onChange(l.values))}},l.handelRemoveEmailClick=function(e){var t=e.getAttribute("data-email-id");if(t){var n=parseInt(t,10);isNaN(n)||l.removeEmail(n)}},l.addArray=function(e){e.forEach((function(e){return l.addEmail(e,!1)})),l.onChange&&l.onChange(l.values)},l.handlePaste=function(e){var t;e.preventDefault();var n=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain");n&&l.addArray(n.split(","))},l.addInputValue=function(){var e;l.addEmail(null===(e=l.inputElement)||void 0===e?void 0:e.value)},l.handleKeyDown=function(e){var t=e.key;"Enter"!==t&&","!==t||(e.preventDefault(),l.addInputValue())},l.handleResetInputSize=function(){l.inputElement&&(l.inputElement.style.width="130px",l.inputElement.style.height="24px")},l.handleChangeInput=function(){if(l.inputElement&&l.hiddenInputElement){l.hiddenInputElement.innerText=l.inputElement.value;var e=l.hiddenInputElement.offsetWidth,t=l.hiddenInputElement.offsetHeight,n=l.inputElement.offsetWidth,i=l.inputElement.offsetHeight;e<=130&&130!==n?l.handleResetInputSize():(n!==e&&(l.inputElement.style.width=e+"px"),i!==t&&(l.inputElement.style.height=t+"px"),l.hiddenInputElement.innerText="")}},l.namespace=n,l.initialValues=i.value,l.onChange=i.onChange,l.nextEmailPrimaryIdGenerator=new p,l.onMount(n),l}return t(n,e),Object.defineProperty(n.prototype,"validEmailsCount",{get:function(){return this.validEmailCounter},enumerable:!1,configurable:!0}),n}(n),f=new p;return function(e,t){if("object"!=typeof window)return console.error("Emails Input available only in browser with specified window object"),null;var n="emails-input-q3nnHuTv21"+f.next;return new h(e,n,t||{})}}();