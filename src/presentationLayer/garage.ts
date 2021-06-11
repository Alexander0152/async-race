// eslint-disable-next-line import/no-cycle
import Car from '../businessLayer/car';
import CarDao from '../dataAccessLayer/carDao';
import CarService from '../serviceLayer/carService';
import Race from './race';
import Store from './Store';

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

  constructor(private readonly root: Element, private store: Store) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<main>

    <button ${this.store.view === 'garage' ? 'disabled' : ''} id="btn_to_garage">TO GARAGE</button>
    <button  ${
      this.store.view === 'winners' ? 'disabled' : ''
    } id="btn_to_winners">TO WINNERS</button>
    <form id="regForm" class="car_form">
      <p class="title">Car</p>
      <div class="form-field">
        <input
          type="text"
          class="car_input"
          id="create_car_input" 
          name="firstName"
          placeholder="CAR NAME"
        />
        <input type="color" id="create_car_color_input" />
        <button class="btn_add_user" id="btn_create_car">CREATE</button>
      </div>
      <div class="form-field">
        <input class="car_input" type="text" id="update_car_input" placeholder="CAR NAME" />
        <input type="color" id="update_car_color_input" />
        <button class="btn_add_user" id="btn_update_car">UPDATE</button>
      </div>
      <div class="car_input">
        <button class="btn_add_user">RACE</button>
        <button class="btn_add_user">RESET</button>
        <button class="btn_add_user">GENERATE CARS</button>
      </div>
    </form>
    <p class="title">Garage (${this.store.carsCount})</p>
    <p class="title">Page #${this.store.carsPage}</p>
    <div id="garagePage"></div>
    <button id="btn_prev">PREV</button>
    <button id="btn_next">NEXT</button>
  </main>`;

    if (this.root) {
      this.root.appendChild(this.application);
      this.renderRacePage();

      this.btnToGarage = this.application.querySelector('#btn_to_garage');
      this.btnToWinners = this.application.querySelector('#btn_to_winners');

      this.btnPrev = this.application.querySelector('#btn_prev');
      this.btnNext = this.application.querySelector('#btn_prev');

      this.btnCreateCar = this.application.querySelector('#btn_create_car');
      this.btnUpdateCar = this.application.querySelector('#btn_update_car');

      this.createCarInputName = this.application.querySelector('#create_car_input');
      this.updateCarInputName = this.application.querySelector('#update_car_input');

      this.createCarInputColor = this.application.querySelector('#create_car_color_input');
      this.updateCarInputColor = this.application.querySelector('#update_car_color_input');

      this.addButtonListeners();
    }
    return this.application;
  }

  addButtonListeners(): void {
    this.btnToGarage.addEventListener('click', () => alert());
    this.btnToWinners.addEventListener('click', () => alert());
    this.btnCreateCar.addEventListener('click', () => this.createCar());
    this.btnUpdateCar.addEventListener('click', () => this.updateCar());
  }

  renderRacePage(): void {
    this.racePage = document.createElement('div');
    this.store.cars.forEach((el) => new Race(this.racePage, el, this.store).render());
    this.root.appendChild(this.racePage);
  }

  updateView(): void {
    if (this.root && this.application) {
      this.root.removeChild(this.racePage);
      this.render();
    }
  }

  updateCar(): void {
    const car = this.store.selectedCar;
    if (!car) {
      this.updateCarInputName.setCustomValidity('No cars selected!');
      return;
    }
    car.name = this.updateCarInputName.value;
    car.color = this.updateCarInputColor.value;
    this.updateView();

    CarService.updateCar(car.id, { name: car.name, color: car.color });
  }

  createCar() {
    alert();
    // const newName = this.createCarInputName.value;
    // const newColor = this.createCarInputColor.value;
    // console.log(newName, newColor);
    // const car = await CarDao.createCar({ name: newName, color: newColor });
    // console.log(car);
    // this.updateView();
  }
}
