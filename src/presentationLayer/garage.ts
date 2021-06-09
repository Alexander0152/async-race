import Race from './race';
import Store from './Store';

export default class Garage {
  private readonly application: HTMLDivElement;

  private btnToGarage: HTMLButtonElement;

  private btnToWinners: HTMLButtonElement;

  private btnPrev: HTMLButtonElement;

  private btnNext: HTMLButtonElement;

  constructor(private readonly root: Element, private store: Store) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<main>

    <form id="regForm" class="car_form">
      <p class="title">Car</p>
      <div class="form-field">
        <input
          type="text"
          class="car_input"
          id="firstName"
          name="firstName"
          placeholder="CAR NAME"
          required
        />
        <input type="color" />
        <button class="btn_add_user">CREATE</button>
      </div>
      <div class="form-field">
        <input class="car_input" type="text" id="lastName" placeholder="CAR NAME" required />
        <input type="color" />
        <button class="btn_add_user">UPDATE</button>
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
  </main>`;

    this.btnToGarage = document.createElement('button');
    this.btnToGarage.innerHTML = `TO GARAGE`;
    this.btnToGarage.disabled = true;

    this.btnToWinners = document.createElement('button');
    this.btnToWinners.innerHTML = `TO WINNERS`;

    this.btnPrev = document.createElement('button');
    this.btnPrev.innerHTML = `PREV`;
    this.btnPrev.disabled = true;

    this.btnNext = document.createElement('button');
    this.btnNext.innerHTML = `Next`;

    if (this.root) {
      this.root.appendChild(this.btnToGarage);
      this.root.appendChild(this.btnToWinners);
      this.root.appendChild(this.application);
      this.renderCarsPage();
      this.root.appendChild(this.btnPrev);
      this.root.appendChild(this.btnNext);
    }

    this.addButtonListeners();
    return this.application;
  }

  addButtonListeners() {
    this.btnToGarage.addEventListener('click', () => alert());
    this.btnToWinners.addEventListener('click', () => alert());
  }

  renderCarsPage() {
    this.store.cars.forEach((el) => new Race(this.root, el).render());
  }
}
