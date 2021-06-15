import { thru } from 'lodash';
import Car from '../businessLayer/car';
import Winner from '../businessLayer/winner';
import CarService from '../serviceLayer/carService';
import Garage from './garage';
import Store from './store';

export default class Winners {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: Element, private readonly store: Store) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<div class="winners_container">
    <h1 class="title">Winners</h1>
    <p class="title">Page #${this.store.winnersPage}</p>
    <table>
      <tr>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Best time(sec)</th>
      </tr>
      ${this.renderRecords()}
    </table>
  </div>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }

  renderRecords() {
    const records: Element = document.createElement('tr');
    let number = 1;
    this.store.winners.forEach((winner) => {
      const newRecord: Element = document.createElement('tr');
      newRecord.innerHTML = `<tr>
    <td>${number}</td>
    <td>${winner.car.image}</td>
    <td>${winner.car.name}</td>
    <td>${winner.wins}</td>
    <td>${winner.time}</td>
  </tr>`;
      records.appendChild(newRecord);
      number += 1;
    });
    console.log(records.textContent);

    return records.innerHTML;
  }
}
