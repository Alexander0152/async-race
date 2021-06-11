import Car from '../businessLayer/car';
import CarService from '../serviceLayer/carService';

// let cars;
// async function initialize() {
//   cars = await CarService.getCars(1).then();
// }
// let { items: cars, count: carsCount } = await CarService.getCars(1).then();

export default class Store {
  public carsPage: string = '1';

  public cars: Car[];

  public carsCount: string;

  public winnersPage: number = 1;

  public color: string = 'red';

  public winners: { id: string; wins: string; time: number }[];

  public selectedCar: Car;

  public root: HTMLElement;

  public view: string = 'garage';

  async initialize() {
    this.cars = await (await CarService.getCars(1)).cars;
    this.carsCount = await (await CarService.getCars(1)).count;

    // console.log(this.carsCount);
    // async function sayHi() {
    //   console.log(this.carsCount);
    // }

    // setTimeout(sayHi, 1000);
    // this.winners = await (await CarService.g).count;
  }
}
