import Car from '../businessLayer/car';
import Winner from '../businessLayer/winner';
import CarService from '../serviceLayer/carService';
import settings from '../businessLayer/settings';

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

  public sortBy: string = 'time';

  public sortOrder: string = 'ASC';

  public distance: number = settings.defaultDistance;

  async initialize() {
    const carsResp: {
      cars: Car[];
      count: number;
    } = await CarService.getCars(1);

    this.cars = carsResp.cars;
    this.carsCount = carsResp.count;

    const winnersResp = await CarService.getWinners(
      1,
      settings.limitWinnersOnPage,
      this.sortBy,
      this.sortOrder,
    );

    this.winnersCount = winnersResp.count;
    this.winners = winnersResp.winners;
  }

  async updateStoreCars(): Promise<void> {
    const currentPageCars: Car[] = (
      await CarService.getCars(this.carsPage, settings.limitCarsOnPage)
    ).cars;
    this.cars = currentPageCars;
  }

  async updateStoreWinners(): Promise<void> {
    const resp = await CarService.getWinners(
      this.winnersPage,
      settings.limitWinnersOnPage,
      this.sortBy,
      this.sortOrder,
    );

    this.winners = resp.winners;
    this.winnersCount = resp.count;
  }
}
