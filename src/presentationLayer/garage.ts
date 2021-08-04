import Car from '../businessLayer/car';
import CarService from '../serviceLayer/carService';
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import Race from './race';
import Store from './store';
import settings from '../businessLayer/settings';
import ModalWinner from './modalWinner';
import Utils from '../businessLayer/utils';
import Winners from './winners';

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

  public btnRace: HTMLButtonElement;

  public btnReset: HTMLButtonElement;

  private winnerInterval: number;

  private racesRoot: HTMLDivElement;

  constructor(private readonly root: Element, private store: Store) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<main>
    <button id="btn_to_garage">TO GARAGE</button>
    <button id="btn_to_winners">TO WINNERS</button>
    <div id="garage">
    <div class="content" id="content">
    <form id="create_car_form" class="car_form" onsubmit="return false">
      <p class="title">Car</p>
      <div class="form-field">
        <input maxlength="20" class="car_input" type="text" id="create_car_input" placeholder="CAR NAME" />
        <input type="color" id="create_car_color_input" />
        <button class="btn_add_user" id="btn_create_car">CREATE</button>
      </div>
    </form>
    <form id="update_car_form" class="car_form" onsubmit="return false">
      <div class="form-field">
        <input maxlength="20" class="car_input" type="text" id="update_car_input" placeholder="CAR NAME" />
        <input type="color" id="update_car_color_input" />
        <button class="btn_add_user" id="btn_update_car">UPDATE</button>
      </div>
      <div class="car_input">
        <button class="btn_add_user" id="btn_race">RACE</button>
        <button class="btn_add_user" disabled id="btn_reset">RESET</button>
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
    </div>
    </div>
  </main>`;

    if (this.root) {
      this.root.appendChild(this.application);
      this.racesRoot = this.application.querySelector('#garage');
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
      this.btnReset = this.application.querySelector('#btn_reset');

      this.addButtonListeners();
    }
    return this.application;
  }

  addButtonListeners(): void {
    const garagePage: HTMLDivElement = this.root.querySelector('#garage');

    this.btnToGarage.addEventListener('click', () => {
      this.btnToGarage.disabled = true;
      this.btnToWinners.disabled = false;
      this.store.view = 'garage';
      garagePage.style.display = 'block';
      const winnersPage: HTMLDivElement = this.root.querySelector('#winners');
      this.root.removeChild(winnersPage);
    });

    this.btnToWinners.addEventListener('click', async () => {
      this.btnToGarage.disabled = false;
      this.btnToWinners.disabled = true;
      this.store.view = 'winners';
      garagePage.style.display = 'none';
      this.store.updateStoreWinners();
      setTimeout(() => {
        new Winners(this.root, this.store).render();
      }, 500);
    });

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

    this.btnRace.addEventListener('click', async () => {
      Utils.enableBtns('btn_b');
      Utils.disableBtns('btn_a');
      Utils.disableBtns('btn_select');
      Utils.disableBtns('btn_remove');
      this.btnRace.disabled = true;
      this.btnReset.disabled = false;
      await this.raceAllCars();
    });

    this.btnReset.addEventListener('click', async () => {
      Utils.disableBtns('btn_b');
      Utils.enableBtns('btn_select');
      Utils.enableBtns('btn_remove');
      this.btnReset.disabled = true;
      this.btnRace.classList.add('flashing_btn');
      await this.stopRace();
      setTimeout(() => {
        this.btnRace.disabled = false;
        this.btnRace.classList.remove('flashing_btn');
        Utils.enableBtns('btn_a');
      }, 5000);
    });
  }

  async renderRacePage(): Promise<void> {
    this.racePage = document.createElement('div');
    const { cars } = this.store;

    cars.forEach((el) => new Race(this.racePage, el, this.store, this).render());
    this.racesRoot.appendChild(this.racePage);
  }

  updateView(): void {
    if (this.root && this.application) {
      this.racesRoot.removeChild(this.racePage);
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
    this.listenToWinner();
    await Promise.all(
      cars.map(
        async (car): Promise<void> => {
          car.isFinished = false;
          car.isStopped = false;
          const startEngineResp: {
            velocity: number;
            distance: number;
          } = await CarService.startEngine(car.id);

          const { velocity } = startEngineResp;
          const { distance } = startEngineResp;
          const time: number = Math.round(distance / velocity);

          if (time) {
            car.animationId = car.animate(time, this.store.distance);
          } else return;

          const driveResp: { success: boolean } = await CarService.drive(car.id);
          if (!driveResp.success) {
            window.cancelAnimationFrame(car.animationId.id);
          } else {
            car.isFinished = true;
            car.time = time / 1000;
          }
        },
      ),
    );
  }

  async stopRace(): Promise<void> {
    this.store.cars.forEach((car) => {
      car.isFinished = false;
    });

    await clearInterval(this.winnerInterval);
    this.store.cars.forEach(async (car) => {
      await CarService.stopEngine(car.id);
      let id = window.requestAnimationFrame(() => {});
      while (id >= 0) {
        window.cancelAnimationFrame(id);
        id -= 1;
      }
      car.image.style.transform = `translateX(0)`;
    });
  }

  listenToWinner(): void {
    this.winnerInterval = window.setInterval(() => {
      this.store.cars.forEach(async (car) => {
        if (car.isFinished && !car.isStopped) {
          new ModalWinner(this.root, car).show();
          CarService.saveWinner(car.id, car.time);

          await clearInterval(this.winnerInterval);
        }
      });
    }, 100);
  }
}
