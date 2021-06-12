import Car from '../businessLayer/car';
import CarService from '../serviceLayer/carService';
// eslint-disable-next-line import/no-cycle
import Garage from './garage';
import Store from './Store';

export default class Race {
  private readonly application: HTMLDivElement;

  private btnSelect: HTMLButtonElement;

  private btnRemove: HTMLButtonElement;

  private btnA: HTMLButtonElement;

  private btnB: HTMLButtonElement;

  constructor(
    private readonly root: Element,
    private car: Car,
    private readonly store: Store,
    private garage: Garage,
  ) {
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
      this.addBtnListeners();
    }

    return this.application;
  }

  addBtnListeners() {
    this.btnSelect.addEventListener('click', () => {
      this.store.selectedCar = this.car;
    });

    this.btnRemove.addEventListener('click', () => {
      this.store.carsCount -= 1;
      CarService.deleteCar(this.car.id).then(() =>
        this.store.updateStoreCars().then(() => {
          this.store.root.innerHTML = '';
          this.garage.render();
        }),
      );
    });

    this.btnA.addEventListener('click', () => {
      // const startEngineRes: {
      //   velocity: number;
      //   distance: number;
      // } = await CarService.startEngine(this.car.id);

      // const { velocity } = startEngineRes;
      // const { distance } = startEngineRes;
      // const time: number = distance / velocity;

      // if (time) {
      //   this.car.status = 'started';
      // } else return;

      // const driveRes: { success: boolean } = await CarService.drive(this.car.id);

      // if (driveRes.success === true) {
      //   this.car.status = 'drive';
      // } else return;

      this.car.animate(2000, 1450);
      // console.log(time);
    });
  }
}
