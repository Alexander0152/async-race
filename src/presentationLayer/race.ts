import Car from '../businessLayer/car';

export default class Race {
  private readonly application: HTMLDivElement;

  private btnSelect: HTMLButtonElement;

  private btnRemove: HTMLButtonElement;

  private btnA: HTMLButtonElement;

  private btnB: HTMLButtonElement;

  constructor(private readonly root: Element, private car: Car) {
    this.application = document.createElement('div');
    this.btnSelect = document.createElement('button');
    this.btnRemove = document.createElement('button');
    this.btnA = document.createElement('button');
    this.btnB = document.createElement('button');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<div class="race">
    <div class="car-panel">
      <button class="btn_add_user" id="select-car-${this.car.id}">SELECT</button>  
      <button class="btn_add_user" id="remove-car-${this.car.id}">REMOVE</button>
      <p>${this.car.name}</p>
    </div>
    <div class="car-panel">
    <button class="race-btn", id="btn-start-${this.car.id}">A</button>
    <button class="race-btn" id="btn-stop-${this.car.id}">B</button>
    <div id="car-image-${this.car.id}"></div>
    </div>
    <div class="finish"></div>
    </div>`;

    this.btnSelect = this.application.querySelector(`#select-car-${this.car.id}`);
    this.btnRemove = this.application.querySelector(`#remove-car-${this.car.id}`);
    this.btnA = this.application.querySelector(`#btn-start-${this.car.id}`);
    this.btnB = this.application.querySelector(`#btn-stop-${this.car.id}`);

    const carRoot = this.application.querySelector(`#car-image-${this.car.id}`);
    carRoot.appendChild(this.car.render());

    if (this.root) {
      this.root.appendChild(this.application);
    }

    return this.application;
  }
}
