import Car from '../businessLayer/car';
import Winner from '../businessLayer/winner';
import CarService from '../serviceLayer/carService';

export default class Store {
  public carsPage: number = 1;

  public cars: Car[];

  public winners: Winner[];

  public carsCount: number;

  public winnersCount: number;

  public winnersPage: number = 1;

  public selectedCar: Car;

  public root: HTMLElement;

  public view: string = 'garage';

  public sortBy: string = 'id';

  public sortOrder: string = 'DESC';

  async initialize() {
    const carsResp: {
      cars: Car[];
      count: number;
    } = await CarService.getCars(1);

    this.cars = carsResp.cars;
    this.carsCount = carsResp.count;

    const winnersResp = await CarService.getWinners(1, 10, 'time', 'DESC');

    this.winnersCount = winnersResp.count;
    this.winners = winnersResp.winners;
  }

  async updateStoreCars(): Promise<void> {
    const currentPageCars: Car[] = (await CarService.getCars(this.carsPage)).cars;
    this.cars = currentPageCars;
  }

  async updateStoreWinners(): Promise<void> {
    const { winners } = await CarService.getWinners(
      this.winnersPage,
      10,
      this.sortBy,
      this.sortOrder,
    );

    this.winners = winners;
  }
}
