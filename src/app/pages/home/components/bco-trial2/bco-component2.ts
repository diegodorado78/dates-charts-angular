import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

// @customElement('bco-component2')

export class BcoComponent2 extends LitElement {

    static styles = css`p { color: blue }`;

    @property()
    name = 'Somebody';
  
    render() {
      return html`<p>Hello, ${this.name}!</p>`;
    }
}
