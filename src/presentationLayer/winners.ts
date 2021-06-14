import Car from '../businessLayer/car';
import CarService from '../serviceLayer/carService';
import Garage from './garage';
import Store from './store';

export default class Winners {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: Element, private readonly store: Store) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<div class="race">
    <div class="car-panel">
      <button class="btn_add_user" id="select-car-${this.car.id}">SELECT</button>  
      <button class="btn_add_user" id="remove-car-${this.car.id}">REMOVE</button>
      <p>${this.car.name}</p>
    </div>
    <div class="car-panel">
    <button class="race-btn btn_a", id="btn-start-${this.car.id}">A</button>
    <button class="race-btn btn_b" id="btn-stop-${this.car.id}" disabled>B</button>
    <div id="car-image-${this.car.id}"></div>
    </div>
    <div class="finish"></div>
    </div>`;

    return this.application;
  }
}
