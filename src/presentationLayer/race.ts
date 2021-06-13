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

  private animationId: { id: number } = { id: 0 };

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

    this.btnRemove.addEventListener('click', (): void => this.removeCar());

    this.btnA.addEventListener(
      'click',
      async (): Promise<void> => {
        await this.startRace();
      },
    );

    this.btnB.addEventListener(
      'click',
      async (): Promise<void> => {
        await this.stopRace();
      },
    );
  }

  removeCar(): void {
    this.store.carsCount -= 1;
    CarService.deleteCar(this.car.id).then(() =>
      this.store.updateStoreCars().then(() => {
        this.store.root.innerHTML = '';
        this.garage.render();
      }),
    );
  }

  async startRace(): Promise<void> {
    const startEngineResp: {
      velocity: number;
      distance: number;
    } = await CarService.startEngine(this.car.id);

    const { velocity } = startEngineResp;
    const { distance } = startEngineResp;
    const time: number = distance / velocity;

    if (time) {
      this.btnA.disabled = true;
      const displayDistance: number = 1410;
      this.animationId = this.car.animate(time, displayDistance);
    } else return;

    const driveResp: { success: boolean } = await CarService.drive(this.car.id);
    // this.car.isFinished = this.animationId.isFinished;

    if (!driveResp.success) {
      window.cancelAnimationFrame(this.animationId.id);
    }
  }

  async stopRace(): Promise<void> {
    await CarService.stopEngine(this.car.id);
    this.btnB.disabled = true;
    this.btnA.disabled = false;
    window.cancelAnimationFrame(this.animationId.id);
    this.car.image.style.transform = `translateX(0)`;

    // console.log(window.cancelAnimationFrame(this.animationId));
    // let animateId: number;
    // if (time) {
    //   const displayDistance: number = 1400;
    //   animateId = this.car.animate(time, displayDistance).id;
    // } else return;

    // const driveResp: { success: boolean } = await CarService.drive(this.car.id);

    // if (!driveResp.success) {
    //   window.cancelAnimationFrame(animateId);
    // }
  }
}
