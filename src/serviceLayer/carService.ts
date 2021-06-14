import Car from '../businessLayer/car';
import Utils from '../businessLayer/utils';
import CarDao from '../dataAccessLayer/carDao';

export default class CarService {
  public static async getCars(
    page: number,
    limit: number = 7,
  ): Promise<{ cars: Car[]; count: string }> {
    return CarDao.getCars(page, limit);
  }

  public static async getCar(id: number): Promise<{ name: string; color: string; id: number }> {
    return CarDao.getCar(id);
  }

  public static async createCar(body: { name: string; color: string }): Promise<Car> {
    return CarDao.createCar(body);
  }

  public static async deleteCar(id: number): Promise<{}> {
    return CarDao.deleteCar(id);
  }

  public static async updateCar(id: number, body: { name: string; color: string }): Promise<{}> {
    return CarDao.updateCar(id, body);
  }

  public static async generateRandomCars(): Promise<Car[]> {
    const generatedCars: { name: string; color: string }[] = Utils.generateRandomCars();

    const cars = await Promise.all(generatedCars.map((el) => CarService.createCar(el)));
    return cars;
  }

  public static async startEngine(id: number): Promise<{ velocity: number; distance: number }> {
    return CarDao.startEngine(id);
  }

  public static async stopEngine(id: number): Promise<{ velocity: number; distance: number }> {
    return CarDao.stopEngine(id);
  }

  public static async drive(id: number): Promise<{ success: boolean }> {
    return CarDao.drive(id);
  }

  public static async saveWinner(newId: number, newTime: number): Promise<void> {
    CarDao.saveWinner(newId, newTime);
  }

  public static async getWinners(page: number, limit: number = 7, sort: string, order: string) {
    return CarDao.getWinners(page, limit, sort, order);
  }
}
