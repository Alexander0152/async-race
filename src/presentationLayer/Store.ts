import Car from '../businessLayer/car';
import CarService from '../serviceLayer/carService';

export default class Store {
  public carsPage: number = 1;

  public cars: Car[];

  public carsCount: number;

  public winnersPage: number = 1;

  public winners: { id: string; wins: string; time: number }[];

  public selectedCar: Car;

  public root: HTMLElement;

  public view: string = 'garage';

  async initialize() {
    this.cars = await (await CarService.getCars(1)).cars;
    this.carsCount = +(await (await CarService.getCars(1)).count);
  }

  async updateStoreCars(): Promise<void> {
    const currentPageCars: Car[] = (await CarService.getCars(this.carsPage)).cars;
    this.cars = currentPageCars;
  }
}
