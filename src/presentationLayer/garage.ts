import Car from '../businessLayer/car';
import CarService from '../serviceLayer/carService';
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import Race from './race';
import Store from './Store';
import settings from '../businessLayer/settings';

export default class Garage {
  private readonly application: HTMLDivElement;

  private btnToGarage: HTMLButtonElement;

  private btnToWinners: HTMLButtonElement;

  private btnPrev: HTMLButtonElement;

  private btnNext: HTMLButtonElement;

  private racePage: HTMLElement;

  private btnCreateCar: HTMLElement;

  private btnUpdateCar: HTMLElement;

  private createCarInputName: HTMLInputElement;

  private updateCarInputName: HTMLInputElement;

  private createCarInputColor: HTMLInputElement;

  private updateCarInputColor: HTMLInputElement;

  private btnGeneratecars: HTMLBRElement;

  private btnRace: HTMLButtonElement;

  private animationState: { id: number }[];

  constructor(private readonly root: Element, private store: Store) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<main>

    <button ${this.store.view === 'garage' ? 'disabled' : ''} id="btn_to_garage">TO GARAGE</button>
    <button  ${
      this.store.view === 'winners' ? 'disabled' : ''
    } id="btn_to_winners">TO WINNERS</button>
    <form id="create_car_form" class="car_form" onsubmit="return false">
      <p class="title">Car</p>
      <div class="form-field">
        <input class="car_input" type="text" id="create_car_input" placeholder="CAR NAME" />
        <input type="color" id="create_car_color_input" />
        <button class="btn_add_user" id="btn_create_car">CREATE</button>
      </div>
    </form>
    <form id="update_car_form" class="car_form" onsubmit="return false">
      <div class="form-field">
        <input class="car_input" type="text" id="update_car_input" placeholder="CAR NAME" />
        <input type="color" id="update_car_color_input" />
        <button class="btn_add_user" id="btn_update_car">UPDATE</button>
      </div>
      <div class="car_input">
        <button class="btn_add_user" id="btn_race">RACE</button>
        <button class="btn_add_user">RESET</button>
        <button class="btn_add_user" id="btn_generate_cars">GENERATE CARS</button>
      </div>
    </form>
    <p class="title">Garage (${this.store.carsCount})</p>
    <p class="title">Page #${this.store.carsPage}</p>
    <div id="garagePage"></div>
    <button ${this.store.carsPage <= 1 ? 'disabled' : ''} id="btn_prev">PREV</button>
    <button ${
      this.store.carsPage === Math.ceil(this.store.carsCount / 7) ? 'disabled' : ''
    } id="btn_next">NEXT</button>
  </main>`;

    if (this.root) {
      this.root.appendChild(this.application);
      this.renderRacePage();

      this.btnToGarage = this.application.querySelector('#btn_to_garage');
      this.btnToWinners = this.application.querySelector('#btn_to_winners');

      this.btnPrev = this.application.querySelector('#btn_prev');
      this.btnNext = this.application.querySelector('#btn_next');

      this.btnCreateCar = this.application.querySelector('#btn_create_car');
      this.btnUpdateCar = this.application.querySelector('#btn_update_car');

      this.createCarInputName = this.application.querySelector('#create_car_input');
      this.updateCarInputName = this.application.querySelector('#update_car_input');

      this.createCarInputColor = this.application.querySelector('#create_car_color_input');
      this.updateCarInputColor = this.application.querySelector('#update_car_color_input');

      this.btnGeneratecars = this.application.querySelector('#btn_generate_cars');
      this.btnRace = this.application.querySelector('#btn_race');

      this.addButtonListeners();
    }
    return this.application;
  }

  addButtonListeners(): void {
    this.btnToGarage.addEventListener('click', () => alert());
    this.btnToWinners.addEventListener('click', async () => console.log(this.store.cars));

    this.btnCreateCar.addEventListener('click', () => this.createCar());
    this.btnUpdateCar.addEventListener('click', () => this.updateCar());

    this.btnPrev.addEventListener('click', () => {
      this.store.carsPage -= 1;
      this.store.updateStoreCars().then(() => this.updateView());
    });

    this.btnNext.addEventListener('click', () => {
      this.store.carsPage += 1;
      this.store.updateStoreCars().then(() => this.updateView());
    });

    this.btnGeneratecars.addEventListener('click', () => {
      this.store.carsCount += settings.generateCarsNumber;
      CarService.generateRandomCars().then(() =>
        this.store.updateStoreCars().then(() => this.updateView()),
      );
    });

    this.btnRace.addEventListener('click', async () => this.raceAllCars());
  }

  async renderRacePage(): Promise<void> {
    this.racePage = document.createElement('div');
    const { cars } = this.store;
    // const cars: Car[] = await (await CarService.getCars(this.store.carsPage)).cars;

    cars.forEach((el) => new Race(this.racePage, el, this.store, this).render());
    this.root.appendChild(this.racePage);
  }

  updateView(): void {
    if (this.root && this.application) {
      this.root.removeChild(this.racePage);
      this.render();
    }
  }

  updateCar(): void {
    const car: Car = this.store.selectedCar;
    if (!car) {
      this.updateCarInputName.setCustomValidity('No cars selected!');
      return;
    }
    car.name = this.updateCarInputName.value;
    car.color = this.updateCarInputColor.value;
    CarService.updateCar(car.id, { name: car.name, color: car.color }).then(() =>
      this.store.updateStoreCars().then(() => this.updateView()),
    );
  }

  async createCar(): Promise<void> {
    const newName: string = this.createCarInputName.value;
    const newColor: string = this.createCarInputColor.value;
    if (newName === '') {
      this.createCarInputName.setCustomValidity('Name should be fullfilled!');
      return;
    }
    this.createCarInputName.setCustomValidity('');

    await CarService.createCar({ name: newName, color: newColor });
    this.store.carsCount += 1;
    this.store.updateStoreCars().then(() => this.updateView());
  }

  async raceAllCars(): Promise<void> {
    const { cars } = this.store;
    await Promise.all(
      cars.map(
        async (car): Promise<void> => {
          car.isFinished = true;
          const startEngineResp: {
            velocity: number;
            distance: number;
          } = await CarService.startEngine(car.id);

          const { velocity } = startEngineResp;
          const { distance } = startEngineResp;
          const time: number = distance / velocity;

          let animateId;
          if (time) {
            const displayDistance: number = 1410;
            animateId = car.animate(time, displayDistance);
          } else return;

          const driveResp: { success: boolean } = await CarService.drive(car.id);
          if (!driveResp.success) {
            car.isFinished = false;
            window.cancelAnimationFrame(animateId.id);
          }
        },
      ),
    );
  }
}
