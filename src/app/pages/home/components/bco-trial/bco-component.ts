import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

type ToDoItem = {
  text: string;
  completed: boolean;
};

// @customElement('bco-component')

export class BcoComponent extends LitElement {
  static get styles() {
    return css`
      .completed {
        text-decoration-line: line-through;
        color: red;
      }
    `;
  }

  @property({attribute: false})
  listItems = [
    { text: 'Make to-do list', completed: true },
    { text: 'Complete Lit tutorial', completed: false }
  ];
  @property({type:Boolean})
  hideCompleted = false;

  render() {
    // TODO: Replace items definition.
  const items = this.hideCompleted
  ? this.listItems.filter((item) => !item.completed)
  : this.listItems;    const todos = html`
      <ul>
        ${items.map((item) =>
          html`
            <li
                class=${item.completed ? 'completed' : ''}
                @click=${() => this.toggleCompleted(item)}>
              ${item.text}
            </li>`
        )}
      </ul>
    `;
    // TODO: Define partial templates.
    const caughtUpMessage = html`
  <p>
  You're all caught up!
  </p>
`;

const todosOrMessage = items.length > 0

  ? todos

  : caughtUpMessage;
    return html`
      <h2>To Do</h2>
      <!-- TODO: Update expression. -->
     ${todosOrMessage}
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        Hide completed
      </label>

    `;
  }

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  @query('#newitem')//llama al id del input creado
  input1!: HTMLInputElement;//hace ref a como se va a llamar en ts no a la etiqueta en html
  // same as : this.input = this.shadowRoot.querySelector('#newitem');

  addToDo() {
    this.listItems.push({text: this.input1.value, completed: false});
    this.requestUpdate();//necesito solicitar actualizacion porque no tengo un input reactivo
    // esto va dentro del tag input: @input=${this.changeName}
    // changeName(event: Event) {
    //   const input = event.target as HTMLInputElement;
    //   this.name = input.value;
    this.input1.value = '';
  }
}