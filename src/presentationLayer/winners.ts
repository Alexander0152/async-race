import Store from './store';

export default class Winners {
  private readonly application: HTMLDivElement;

  private btnPrev: HTMLButtonElement;

  private btnNext: HTMLButtonElement;

  private btnWins: HTMLButtonElement;

  private btnBestTime: HTMLButtonElement;

  constructor(private readonly root: Element, private readonly store: Store) {
    this.application = document.createElement('div');
    this.application.id = 'winners';
  }

  render(): HTMLElement {
    this.application.innerHTML = `<div class="winners_container">
    <h1 class="title">Winners (${this.store.winnersCount})</h1>
    <p class="title">Page #${this.store.winnersPage}</p>
    <table>
      <tr>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th><button class="btn_wins" id="btn_wins">Wins</button></th>
        <th><button class="btn_wins" id="btn_best_time">Best time(sec)</button></th>
      </tr>
      ${this.renderRecords()}
    </table>
    <button ${this.store.winnersPage <= 1 ? 'disabled' : ''} id="btn_winners_prev">PREV</button>
    <button ${
      this.store.winnersPage === Math.ceil(this.store.winnersCount / 10) ? 'disabled' : ''
    } id="btn_winners_next">NEXT</button>
  </div>`;
    if (this.root) {
      this.root.appendChild(this.application);

      this.btnPrev = this.application.querySelector('#btn_winners_prev');
      this.btnNext = this.application.querySelector('#btn_winners_next');

      this.btnWins = this.application.querySelector('#btn_wins');
      this.btnBestTime = this.application.querySelector('#btn_best_time');

      this.addButtonListeners();
    }
    return this.application;
  }

  addButtonListeners(): void {
    this.btnPrev.addEventListener('click', () => {
      this.store.winnersPage -= 1;
      this.store.updateStoreWinners().then(() => this.updateView());
      setTimeout(() => {
        this.updateView();
      }, 400);
    });

    this.btnNext.addEventListener('click', () => {
      this.store.winnersPage += 1;
      this.store.updateStoreWinners().then(() => this.updateView());
      setTimeout(() => {
        this.updateView();
      }, 400);
    });

    this.btnWins.addEventListener('click', () => {
      this.store.sortBy = 'wins';
      if (this.store.sortOrder === 'ASC') {
        this.store.sortOrder = 'DESC';
      } else this.store.sortOrder = 'ASC';

      this.store.updateStoreWinners();
      setTimeout(() => {
        this.updateView();
      }, 500);
    });

    this.btnBestTime.addEventListener('click', () => {
      this.store.sortBy = 'time';
      if (this.store.sortOrder === 'ASC') {
        this.store.sortOrder = 'DESC';
      } else this.store.sortOrder = 'ASC';

      this.store.updateStoreWinners();
      setTimeout(() => {
        this.updateView();
      }, 500);
    });
  }

  updateView(): void {
    if (this.root && this.application) {
      this.root.removeChild(this.application);
      this.render();
    }
  }

  renderRecords() {
    const records: Element = document.createElement('tr');
    let number = 1;
    this.store.winners.forEach((winner) => {
      const newRecord: Element = document.createElement('tr');
      newRecord.innerHTML = `<tr>
    <td>${number}</td>
    <td>${winner.car.render().innerHTML}</td>
    <td>${winner.car.name}</td>
    <td>${winner.wins}</td>
    <td>${winner.time}</td>
  </tr>`;
      records.appendChild(newRecord);
      number += 1;
    });

    return records.innerHTML;
  }

  update() {
    this.root.removeChild(this.application);
    this.render();
  }
}
