import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const wrapper = document.createElement('div')
wrapper.innerHTML = `
  <style>
  :host {
    display: block;
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 70px;
    height: 70px;
    background-color: yellow;
  }
  </style>
`;
const template = document.createElement('div')
wrapper.appendChild(template)

class SMWidget extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' }).appendChild(wrapper);

    ReactDOM.render(<App />, template);
  }
}
customElements.define('sm-widget', SMWidget);

serviceWorker.unregister();
