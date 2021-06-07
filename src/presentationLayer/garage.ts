export default class Garage {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: Element) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<main>
    <button id="btnToGarage" class="btn_add_user">TO GARAGE</button>
    <button id="btnToWinners" class="btn_cansel">TO WINNERS</button>

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
    <p class="title">Garage ()</p>
    <p class="title">Page #</p>
    <div id="garagePage"></div>
  </main>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }
}
